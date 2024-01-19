  import { CartProduct } from "./CartProduct";
  import { Product } from "./Product";

  export class Cart {
    products: CartProduct[] | undefined;

    

    addProduct(cartProduct: CartProduct) {
      if (this.checkProduct(cartProduct.product)) {
        this.increaseProductQuantity(cartProduct.product, cartProduct.quantity);
      } else {
        this.products?.push(cartProduct);
      }
    }

    removeProduct(cartProduct: CartProduct) {
      const productToRemove = this.checkProduct(cartProduct.product);

      if (productToRemove) {
        return this.products?.filter((product) => {
          product !== productToRemove;
        });
      }
    }

    increaseProductQuantity(product: Product, quantity: number) {
      const productToIncrease = this.checkProduct(product);

      if (productToIncrease) {
        this.products = this.products?.map((cartProduct) => {
          if (cartProduct.product === product) {
            return { ...cartProduct, quantity: cartProduct.quantity + quantity };
          } else {
            return cartProduct;
          }
        });
      }
    }

    decreaseProductQuantity(product: Product, quantity: number) {
      const productToDecrease = this.checkProduct(product);

      if (productToDecrease) {
        this.products = this.products?.map((cartProduct) => {
          if (cartProduct.product === product) {
            const newQuantity = Math.max(0, cartProduct.quantity - quantity);

            if (newQuantity === 0) {
              this.removeProduct(cartProduct);
              return undefined; 
            } else {
              return { ...cartProduct, quantity: newQuantity };
            }
          } else {
            
            return cartProduct;
          }
        }).filter(Boolean) as CartProduct[];
      }
    }

    checkProduct(product: Product): CartProduct | undefined {
      return this.products?.find((x) => x.product === product);
    }
  }

