export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  badge?: 'nuevo' | 'oferta' | 'exclusivo';
  emoji: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type ProductOrNull = Product | null;

export function isProduct(value: ProductOrNull): value is Product {
  return value !== null && typeof value === 'object' && 'id' in value;
}
