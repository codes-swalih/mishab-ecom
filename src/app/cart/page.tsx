"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from "@/context/CartContext";
import { countdownTime } from "@/store/countdownTime";
import toast from "react-hot-toast";

const Cart = () => {
  const [timeLeft, setTimeLeft] = useState(countdownTime());
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(countdownTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const {
    cartState,
    updateCart,
    removeFromCart,
    applyDiscount,
    updateShipping,
    clearCart,
  } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    // Find product in cart
    const itemToUpdate = cartState.cartArray.find(
      (item) => item.id === productId
    );

    // Check if product exists
    if (itemToUpdate) {
      // Pass current values of selectedSize and selectedColor
      updateCart(
        productId,
        newQuantity,
        itemToUpdate.selectedSize,
        itemToUpdate.selectedColor
      );
      toast.success("Cart updated");
    }
  };

  // Cart constants and state
  const moneyForFreeship = 150;
  const [applyCode, setApplyCode] = useState<number>(0);

  // Initialize shipping fee based on cart state - only runs once when component mounts
  useEffect(() => {
    // Set a default shipping fee when cart isn't empty
    if (cartState.cartArray.length > 0 && cartState.shipping === 0) {
      updateShipping(30);
    }

    // Reset shipping when cart is empty
    if (cartState.cartArray.length === 0 && cartState.shipping !== 0) {
      updateShipping(0);
    }
  }, []);

  // Update shipping fee when cart items change
  useEffect(() => {
    // Don't update shipping if cart is empty
    if (cartState.cartArray.length === 0) {
      return;
    }

    // Apply free shipping when total meets threshold
    if (cartState.subtotal >= moneyForFreeship && cartState.shipping !== 0) {
      updateShipping(0);
    } else if (
      cartState.subtotal > 0 &&
      cartState.subtotal < moneyForFreeship &&
      cartState.shipping !== 30
    ) {
      updateShipping(30);
    }
  }, [cartState.cartArray.length, cartState.subtotal]);

  const handleApplyCode = (minValue: number, discount: number) => {
    if (cartState.subtotal > minValue) {
      setApplyCode(minValue);
      applyDiscount(discount);
      toast.success(`Discount of $${discount} applied!`);
    } else {
      toast.error(`Minimum order must be $${minValue}`);
    }
  };

  // Only handle discount reset without shipping updates
  useEffect(() => {
    // Reset discount if total drops below minimum
    if (cartState.subtotal < applyCode && applyCode > 0) {
      setApplyCode(0);
      applyDiscount(0);
      toast("Discount removed - order total below minimum");
    }
  }, [cartState.subtotal, applyCode]);

  const redirectToCheckout = () => {
    router.push(
      `/checkout?discount=${cartState.discount}&ship=${cartState.shipping}`
    );
  };

  return (
    <>
      {/* <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      /> */}
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Shopping cart" subHeading="Shopping cart" />
      </div>
      <div className="cart-block md:py-20 py-10">
        <div className="container px-4 mx-auto max-w-[1320px]">
          <div className="content-main flex justify-between max-xl:flex-col gap-y-8">
            <div className="xl:w-2/3 xl:pr-3 w-full">
              {/* <div className="time bg-green py-3 px-5 flex items-center rounded-lg">
                                <div className="heding5">🔥</div>
                                <div className="caption1 pl-2">Your cart will expire in
                                    <span className="min text-red text-button fw-700"> {timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
                                    <span> minutes! Please checkout now before your items sell out!</span>
                                </div>
                            </div> */}
              <div className="heading banner mt-5">
                {/* <div className="text">Buy
                                    <span className="text-button"> $<span className="more-price">{moneyForFreeship - cartState.subtotal > 0 ? (<>{moneyForFreeship - cartState.subtotal}</>) : (0)}</span>.00 </span>
                                    <span>more to get </span>
                                    <span className="text-button">freeship</span>
                                </div> */}
                {/* <div className="tow-bar-block mt-4">
                                    <div
                                        className="progress-line"
                                        style={{ width: cartState.subtotal <= moneyForFreeship ? `${(cartState.subtotal / moneyForFreeship) * 100}%` : `100%` }}
                                    ></div>
                                </div> */}
              </div>
              <div className="list-product w-full sm:mt-7 mt-5">
                <div className="w-full border border-gray-200 rounded-2xl shadow-sm bg-white overflow-hidden">
                  <div className="heading bg-white border-b border-gray-100 py-5 px-6">
                    <div className="hidden lg:flex items-center text-gray-600 text-sm font-medium">
                      <div className="md:w-[52%]">
                        <div>Product</div>
                      </div>
                      <div className="md:w-[12%] text-center">
                        <div>Price</div>
                      </div>
                      <div className="md:w-[20%] text-center">
                        <div>Quantity</div>
                      </div>
                      <div className="md:w-[12%] text-center">
                        <div>Total</div>
                      </div>
                      <div className="w-[4%]"></div>
                    </div>
                    <div className="lg:hidden">
                      <h2 className="text-xl font-semibold text-gray-900">
                        Shopping Cart
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        {cartState.cartArray.length}{" "}
                        {cartState.cartArray.length === 1 ? "item" : "items"} in
                        your cart
                      </p>
                    </div>
                  </div>
                  <div className="list-product-main w-full px-3 md:px-5">
                    {cartState.cartArray.length < 1 ? (
                      <p className="text-button py-5 text-center">
                        No products in your cart
                      </p>
                    ) : (
                      cartState.cartArray.map((product) => (
                        <div
                          key={product.id}
                          className="border-b   border-line py-4"
                        >
                          {/* Desktop View */}
                          <div className="hidden lg:flex w-full items-center py-2">
                            {/* Product Info */}
                            <div className="md:w-[50%] lg:w-[55%] pr-4">
                              <div className="flex items-center">
                                <div className="w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                                  <Image
                                    src={
                                      product.image ||
                                      (typeof product.images?.[0] === "object"
                                        ? (product.images[0] as { url: string })
                                            ?.url
                                        : product.thumb ||
                                          "/img/product/product-thumb.png")
                                    }
                                    width={80}
                                    height={80}
                                    alt={product.name || ""}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-sm lg:text-base font-medium line-clamp-2">
                                    {product.name}
                                  </h3>
                                  <div className="mt-1 flex flex-wrap gap-x-4 text-xs lg:text-sm text-gray-500">
                                    {product.selectedColor && (
                                      <div>
                                        Color:{" "}
                                        <span className="font-medium">
                                          {product.selectedColor}
                                        </span>
                                      </div>
                                    )}
                                    {product.selectedSize && (
                                      <div>
                                        Size:{" "}
                                        <span className="font-medium">
                                          {product.selectedSize}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Price */}
                            <div className="w-[15%] lg:w-[12%] text-center">
                              <div className="text-sm lg:text-base text-gray-900">
                                ${product.price || 0}.00
                              </div>
                            </div>

                            {/* Quantity */}
                            <div className="w-[20%] lg:w-[18%] flex justify-center">
                              <div className="flex items-center bg-gray-50 rounded-md">
                                <button
                                  className={`w-8 h-8 flex items-center justify-center ${
                                    product.quantity === 1
                                      ? "text-gray-300"
                                      : "text-gray-500"
                                  }`}
                                  disabled={product.quantity === 1}
                                  onClick={() => {
                                    if (product.quantity > 1) {
                                      handleQuantityChange(
                                        String(product.id),
                                        product.quantity - 1
                                      );
                                    }
                                  }}
                                >
                                  <Icon.Minus size={16} />
                                </button>
                                <span className="px-2 lg:px-3 text-sm font-medium">
                                  {product.quantity}
                                </span>
                                <button
                                  className="w-8 h-8 flex items-center justify-center text-gray-500"
                                  onClick={() =>
                                    handleQuantityChange(
                                      String(product.id),
                                      product.quantity + 1
                                    )
                                  }
                                >
                                  <Icon.Plus size={16} />
                                </button>
                              </div>
                            </div>

                            {/* Total */}
                            <div className="w-[10%] lg:w-[10%] text-center">
                              <div className="text-sm lg:text-base font-medium text-gray-900">
                                $
                                {(product.quantity || 1) * (product.price || 0)}
                                .00
                              </div>
                            </div>

                            {/* Remove */}
                            <div className="w-[5%] flex justify-center">
                              <button
                                onClick={() =>
                                  removeFromCart(String(product.id))
                                }
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                aria-label="Remove item"
                              >
                                <Icon.X size={18} />
                              </button>
                            </div>
                          </div>
                          {/* Mobile View */}
                          <div className="md:hidden w-full px-4">
                            <div className="border rounded-lg shadow-sm bg-white p-3 mb-4 space-y-4">
                              <div className="flex gap-3 items-start w-full">
                                {/* Image */}
                                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 border">
                                  <Image
                                    src={
                                      product.image ||
                                      (typeof product.images?.[0] === "object"
                                        ? (product.images[0] as { url: string })
                                            ?.url
                                        : product.thumb ||
                                          "/img/product/product-thumb.png")
                                    }
                                    alt={product.name || ""}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                {/* Product Info */}
                                <div className="flex flex-col min-w-0 flex-1">
                                  <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2 break-words">
                                    {product.name}
                                  </h3>

                                  <p className="text-xs text-gray-500 mt-0.5 truncate">
                                    {product.selectedColor &&
                                      `Color: ${product.selectedColor}`}{" "}
                                    {product.selectedSize &&
                                      `Size: ${product.selectedSize}`}
                                  </p>

                                  <p className="mt-1 text-base font-semibold text-gray-900">
                                    ₹{product.price || 0}.00
                                  </p>
                                </div>

                                {/* Remove Button */}
                                <button
                                  onClick={() =>
                                    removeFromCart(String(product.id))
                                  }
                                  aria-label="Remove item"
                                  className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <Icon.X size={18} />
                                </button>
                              </div>

                              {/* Quantity + Total */}
                              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                                  <button
                                    className={`w-7 h-7 flex items-center justify-center ${
                                      product.quantity === 1
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                    }`}
                                    disabled={product.quantity === 1}
                                    onClick={() => {
                                      if (product.quantity > 1) {
                                        handleQuantityChange(
                                          String(product.id),
                                          product.quantity - 1
                                        );
                                      }
                                    }}
                                  >
                                    <Icon.Minus size={14} />
                                  </button>
                                  <span className="text-sm font-medium w-5 text-center">
                                    {product.quantity}
                                  </span>
                                  <button
                                    className="w-7 h-7 flex items-center justify-center text-gray-600"
                                    onClick={() =>
                                      handleQuantityChange(
                                        String(product.id),
                                        product.quantity + 1
                                      )
                                    }
                                  >
                                    <Icon.Plus size={14} />
                                  </button>
                                </div>

                                {/* Total */}
                                <div className="text-sm text-gray-800 font-semibold">
                                  Total: ₹
                                  {(product.quantity || 1) *
                                    (product.price || 0)}
                                  .00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 xl:pl-12 w-full mt-6 md:mt-0">
              <div className="bg-white shadow-sm border border-gray-200 p-4 md:p-6 rounded-xl max-w-full overflow-hidden">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Order Summary
                </h3>

                {/* Discount Section */}
                {/* <div className="mb-4">
                                    <p className="text-sm text-gray-600 mb-2">Apply Discount</p>
                                    <div className="flex flex-wrap gap-2">
                                        <button 
                                            className={`py-1.5 px-3 text-xs rounded-full ${applyCode === 200 ? 'bg-blue-100 text-blue-800 font-medium border border-blue-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-transparent'}`}
                                            onClick={() => handleApplyCode(200, Math.floor((cartState.subtotal / 100) * 10))}
                                        >
                                            10% OFF ($200+)
                                        </button>
                                        <button 
                                            className={`py-1.5 px-3 text-xs rounded-full ${applyCode === 300 ? 'bg-blue-100 text-blue-800 font-medium border border-blue-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-transparent'}`}
                                            onClick={() => handleApplyCode(300, Math.floor((cartState.subtotal / 100) * 15))}
                                        >
                                            15% OFF ($300+)
                                        </button>
                                        <button 
                                            className={`py-1.5 px-3 text-xs rounded-full ${applyCode === 400 ? 'bg-blue-100 text-blue-800 font-medium border border-blue-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-transparent'}`}
                                            onClick={() => handleApplyCode(400, Math.floor((cartState.subtotal / 100) * 20))}
                                        >
                                            20% OFF ($400+)
                                        </button>
                                    </div>
                                    {applyCode > 0 && (
                                        <div className="mt-2 text-sm text-blue-600 flex items-center">
                                            <Icon.CheckCircle size={14} className="mr-1" />
                                            Discount applied successfully!
                                        </div>
                                    )}
                                </div> */}

                {/* Shipping Options */}
                <div className="mb-5">
                  <p className="text-sm text-gray-600 mb-2">Shipping Options</p>
                  <div className="space-y-2">
                    <div
                      className={`p-2 sm:p-2.5 rounded-lg flex items-center justify-between ${
                        cartState.shipping === 0
                          ? "bg-blue-50 border border-blue-200"
                          : "bg-gray-50 border border-gray-100"
                      }`}
                    >
                      <div className="flex items-center overflow-hidden">
                        <input
                          id="shipping-free"
                          type="radio"
                          name="ship"
                          checked={cartState.shipping === 0}
                          onChange={() => updateShipping(0)}
                          disabled={cartState.subtotal < moneyForFreeship}
                          className="mr-2 sm:mr-2.5 h-4 w-4 flex-shrink-0 accent-blue-600"
                        />
                        <label
                          htmlFor="shipping-free"
                          className={`min-w-0 ${
                            cartState.subtotal < moneyForFreeship
                              ? "text-gray-400"
                              : "text-gray-700"
                          }`}
                        >
                          <div className="text-sm font-medium truncate">
                            Free Shipping
                          </div>
                          <div className="text-xs truncate">
                            {cartState.subtotal < moneyForFreeship
                              ? `Spend $${
                                  moneyForFreeship - cartState.subtotal
                                } more`
                              : "Your order qualifies!"}
                          </div>
                        </label>
                      </div>
                      <div className="text-sm font-medium text-gray-700 ml-1 flex-shrink-0">
                        $0.00
                      </div>
                    </div>

                    <div
                      className={`p-2 sm:p-2.5 rounded-lg flex items-center justify-between ${
                        cartState.shipping === 30
                          ? "bg-blue-50 border border-blue-200"
                          : "bg-gray-50 border border-gray-100"
                      }`}
                    >
                      <div className="flex items-center overflow-hidden">
                        <input
                          id="shipping-standard"
                          type="radio"
                          name="ship"
                          value={30}
                          checked={cartState.shipping === 30}
                          onChange={() => updateShipping(30)}
                          className="mr-2 sm:mr-2.5 h-4 w-4 flex-shrink-0 accent-blue-600"
                        />
                        <label
                          htmlFor="shipping-standard"
                          className="text-gray-700 min-w-0"
                        >
                          <div className="text-sm font-medium truncate">
                            Standard Shipping
                          </div>
                          <div className="text-xs">3-5 business days</div>
                        </label>
                      </div>
                      <div className="text-sm font-medium text-gray-700 ml-1 flex-shrink-0">
                        $30.00
                      </div>
                    </div>

                    <div
                      className={`p-2 sm:p-2.5 rounded-lg flex items-center justify-between ${
                        cartState.shipping === 40
                          ? "bg-blue-50 border border-blue-200"
                          : "bg-gray-50 border border-gray-100"
                      }`}
                    >
                      <div className="flex items-center overflow-hidden">
                        <input
                          id="shipping-express"
                          type="radio"
                          name="ship"
                          value={40}
                          checked={cartState.shipping === 40}
                          onChange={() => updateShipping(40)}
                          className="mr-2 sm:mr-2.5 h-4 w-4 flex-shrink-0 accent-blue-600"
                        />
                        <label
                          htmlFor="shipping-express"
                          className="text-gray-700 min-w-0"
                        >
                          <div className="text-sm font-medium truncate">
                            Express Shipping
                          </div>
                          <div className="text-xs">1-2 business days</div>
                        </label>
                      </div>
                      <div className="text-sm font-medium text-gray-700 ml-1 flex-shrink-0">
                        $40.00
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Totals */}
                <div className="space-y-2 text-sm mb-5">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">
                      ${cartState.subtotal}.00
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    {cartState.shipping > 0 ? (
                      <span className="font-medium">
                        ${cartState.shipping}.00
                      </span>
                    ) : (
                      <span className="text-green-600 font-medium">Free</span>
                    )}
                  </div>

                  {cartState.discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount</span>
                      <span className="text-red-500 font-medium">
                        - ${cartState.discount}.00
                      </span>
                    </div>
                  )}
                </div>

                {/* Progress Bar for Free Shipping */}
                {cartState.subtotal < moneyForFreeship && (
                  <div className="py-2 px-2.5 bg-blue-50 rounded-lg text-xs text-blue-700 mb-4">
                    <div className="flex items-center flex-wrap">
                      <Icon.Info size={12} className="mr-1 flex-shrink-0" />
                      <span className="break-words">
                        Add{" "}
                        <span className="font-semibold">
                          ${moneyForFreeship - cartState.subtotal}.00
                        </span>{" "}
                        for free shipping
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{
                          width: `${Math.min(
                            100,
                            (cartState.subtotal / moneyForFreeship) * 100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4 mb-5">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-semibold text-gray-900">
                      ${cartState.total}.00
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => router.push("/checkout")}
                  className="w-full bg-black text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
                  disabled={cartState.cartArray.length === 0}
                >
                  Proceed to Checkout
                </button>

                <div className="mt-4">
                  <Link
                    href="/shop/breadcrumb1"
                    className="flex items-center justify-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Icon.ArrowLeft size={16} className="mr-1" />
                    Continue Shopping
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-4 pt-4 sm:mt-5 sm:pt-5 border-t border-gray-100">
                  <div className="flex justify-center space-x-4 sm:space-x-5">
                    <div className="flex flex-col items-center">
                      <Icon.Shield size={16} className="text-gray-400 mb-1" />
                      <span className="text-xs text-gray-500">
                        Secure Payment
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Icon.Truck size={16} className="text-gray-400 mb-1" />
                      <span className="text-xs text-gray-500">
                        Fast Delivery
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Icon.ArrowCounterClockwise
                        size={16}
                        className="text-gray-400 mb-1"
                      />
                      <span className="text-xs text-gray-500">
                        Easy Returns
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
