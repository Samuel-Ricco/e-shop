import { Product } from "./Product";

export class CartProduct {
  product: Product | undefined;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
