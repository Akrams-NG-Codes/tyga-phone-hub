
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  brand: "Apple" | "Samsung" | "Other";
  featured?: boolean;
  specifications?: Record<string, string>;
  stock: number;
  slug: string;
  relatedProductIds?: string[];
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  link: string;
}
