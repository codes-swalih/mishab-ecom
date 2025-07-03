'use client'

// CartContext.tsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { ProductType } from '@/type/ProductType';

// Extend ProductType to include the properties we need for cart items
type ExtendedProductType = ProductType & {
    quantityPurchase?: number;
    selectedSize?: string;
    selectedColor?: string;
    thumb?: string;
    image?: string;
    subtotal?: number;
}

interface CartItem extends ExtendedProductType {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
    subtotal: number;
    sku?: string;
}

interface CartState {
    cartArray: CartItem[];
    subtotal: number;
    total: number;
    discount: number;
    shipping: number;
}

type CartAction =
    | { type: 'ADD_TO_CART'; payload: ExtendedProductType }
    | { type: 'REMOVE_FROM_CART'; payload: string }
    | {
        type: 'UPDATE_CART'; payload: {
            itemId: string; quantity: number, selectedSize: string, selectedColor: string
        }
    }
    | { type: 'LOAD_CART'; payload: CartItem[] }
    | { type: 'APPLY_DISCOUNT'; payload: number }
    | { type: 'UPDATE_SHIPPING'; payload: number }

interface CartContextProps {
    cartState: CartState;
    addToCart: (item: ExtendedProductType) => void;
    removeFromCart: (itemId: string) => void;
    updateCart: (itemId: string, quantity: number, selectedSize: string, selectedColor: string) => void;
    applyDiscount: (discount: number) => void;
    updateShipping: (shipping: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

// Helper function to calculate cart totals
const calculateCartTotals = (cartArray: CartItem[], discount: number, shipping: number) => {
    const subtotal = cartArray.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
    const total = subtotal - discount + shipping;
    
    return { subtotal, total };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
    let updatedCart;
    let totals;
    
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if item already exists with same id, size and color
            const existingItemIndex = state.cartArray.findIndex(item => 
                item.id === action.payload.id && 
                item.selectedSize === action.payload.selectedSize && 
                item.selectedColor === action.payload.selectedColor
            );
            
            if (existingItemIndex >= 0) {
                // Item already exists, update quantity
                const updatedCartArray = [...state.cartArray];
                const newQuantity = updatedCartArray[existingItemIndex].quantity + (action.payload.quantityPurchase || 1);
                const price = action.payload.price || 0;
                
                updatedCartArray[existingItemIndex] = {
                    ...updatedCartArray[existingItemIndex],
                    quantity: newQuantity,
                    subtotal: newQuantity * price
                };
                
                totals = calculateCartTotals(updatedCartArray, state.discount, state.shipping);
                
                return {
                    ...state,
                    cartArray: updatedCartArray,
                    subtotal: totals.subtotal,
                    total: totals.total
                };
            } else {
                // Add new item to cart
                const price = action.payload.price || 0;
                const quantity = action.payload.quantityPurchase || 1;
                const subtotal = price * quantity;
                
                const newItem: CartItem = { 
                    ...action.payload,
                    quantity: quantity,
                    selectedSize: action.payload.selectedSize || '',
                    selectedColor: action.payload.selectedColor || '',
                    subtotal: subtotal,
                    sku: `${action.payload.id}-${action.payload.selectedSize || ''}-${action.payload.selectedColor || ''}`
                };
                
                updatedCart = [...state.cartArray, newItem];
                totals = calculateCartTotals(updatedCart, state.discount, state.shipping);
                
                return {
                    ...state,
                    cartArray: updatedCart,
                    subtotal: totals.subtotal,
                    total: totals.total
                };
            }
            
        case 'REMOVE_FROM_CART':
            updatedCart = state.cartArray.filter((item) => item.id !== action.payload);
            totals = calculateCartTotals(updatedCart, state.discount, state.shipping);
            
            return {
                ...state,
                cartArray: updatedCart,
                subtotal: totals.subtotal,
                total: totals.total
            };
            
        case 'UPDATE_CART':
            updatedCart = state.cartArray.map((item) => {
                if (item.id === action.payload.itemId &&
                    item.selectedSize === action.payload.selectedSize &&
                    item.selectedColor === action.payload.selectedColor) {
                    const price = item.price || 0;
                    return {
                        ...item,
                        quantity: action.payload.quantity,
                        subtotal: price * action.payload.quantity
                    };
                }
                return item;
            });
            
            totals = calculateCartTotals(updatedCart, state.discount, state.shipping);
            
            return {
                ...state,
                cartArray: updatedCart,
                subtotal: totals.subtotal,
                total: totals.total
            };
            
        case 'LOAD_CART':
            totals = calculateCartTotals(action.payload, state.discount, state.shipping);
            
            return {
                ...state,
                cartArray: action.payload,
                subtotal: totals.subtotal,
                total: totals.total
            };
            
        case 'APPLY_DISCOUNT':
            return {
                ...state,
                discount: action.payload,
                total: state.subtotal - action.payload + state.shipping
            };
            
        case 'UPDATE_SHIPPING':
            return {
                ...state,
                shipping: action.payload,
                total: state.subtotal - state.discount + action.payload
            };
            
        default:
            return state;
    }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize with empty cart and zero values
    const initialState: CartState = { 
        cartArray: [],
        subtotal: 0,
        total: 0,
        discount: 0,
        shipping: 0
    };
    
    // Load cart data from localStorage if available
    const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                try {
                    const parsedCart = JSON.parse(savedCart) as CartItem[];
                    const totals = calculateCartTotals(parsedCart, 0, 0);
                    return {
                        cartArray: parsedCart,
                        subtotal: totals.subtotal,
                        total: totals.total,
                        discount: 0,
                        shipping: 0
                    };
                } catch (err) {
                    console.error('Error parsing cart data', err);
                    return initialState;
                }
            }
        }
        return initialState;
    });
    
    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cartState.cartArray));
        }
    }, [cartState.cartArray]);

    const addToCart = (item: ExtendedProductType) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = (itemId: string) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    const updateCart = (itemId: string, quantity: number, selectedSize: string, selectedColor: string) => {
        dispatch({ type: 'UPDATE_CART', payload: { itemId, quantity, selectedSize, selectedColor } });
    };
    
    const applyDiscount = (discount: number) => {
        dispatch({ type: 'APPLY_DISCOUNT', payload: discount });
    };
    
    const updateShipping = (shipping: number) => {
        dispatch({ type: 'UPDATE_SHIPPING', payload: shipping });
    };
    
    const clearCart = () => {
        dispatch({ type: 'LOAD_CART', payload: [] });
    };

    return (
        <CartContext.Provider value={{ 
            cartState, 
            addToCart, 
            removeFromCart, 
            updateCart,
            applyDiscount,
            updateShipping,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
