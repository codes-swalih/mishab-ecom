export interface ProductType {
  _id?: string;
  id?: string;
  name?: string;
  slug?: string;
  thumb?: string;
  price?: number;
  originPrice?: number;
  priceSale?: number;
  quantityPurchase?: number;
  images?: string[] | { url: string }[];
  image?: string | { url: string, blurDataURL: string }; // Some components use image instead of images
  thumbImage?: string | string[] | { url: string }[]; // Used in multiple components
  colors?: string[];
  sizes?: string[];
  variation?: {
    id?: string;
    _id?: string;
    image?: string | { url: string, blurDataURL: string };
    color?: string;
  }[];
  stock?: number;
  quantity?: number;
  sold?: number;
  new?: boolean;
  sale?: boolean;
  action?: boolean | string;
  type?: string;
  category?: string;
  brand?: string | { _id: string; name: string };
  gender?: string;
  description?: string;
  description_points?: string[];
  rate?: number;
  review_count?: number;
  material?: string;
  reviews?: any[];
}
