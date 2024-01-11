import { products } from "@/app/components/product/products"

export class ProductHelper {
  static getProductFromId = (productId: string) => {
    return products.find(product => product.id === productId) || null;
  };
} 