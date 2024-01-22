
import { CartProduct } from "@/model/CartProduct";
import { Product } from "@/model/Product";
import { create } from "zustand";

type CartHook = {
  products: CartProduct[] | undefined;
  addProduct: (cartProduct: CartProduct) => void;
  removeProduct: (cartProduct: CartProduct) => void;
  increaseProductQuantity: (product: Product, quantity: number) => void;
  decreaseProductQuantity: (product: Product, quantity: number) => void;
};

export const useCart = create<CartHook>((set) => ({
  products: [],

  addProduct: (cartProduct: CartProduct) => {
    set((state) => {
      const productInCart = foundProductInCart(cartProduct.product, state.products);
      if (productInCart) {
        state.products = state.products?.map((existingProduct) => {
          if (existingProduct.product === cartProduct.product) {
            return {
              ...existingProduct,
              quantity: existingProduct.quantity + cartProduct.quantity,
            };
          } else {
            return existingProduct;
          }
        });
      } else {
        state.products?.push(cartProduct);
      }

      return { products: state.products };
    });
  },

  removeProduct: (cartProduct: CartProduct) => {
    set((state) => {
      state.products = state.products?.filter((product) => product !== cartProduct);
      return { products: state.products };
    });
  },

  increaseProductQuantity: (product: Product, quantity: number) => {
    set((state) => {
      const productToIncrease = foundProductInCart(product, state.products);
      if (productToIncrease) {
        state.products = state.products?.map((cartProduct) => {
          if (cartProduct.product === product) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          } else {
            return cartProduct;
          }
        });
      }

      return { products: state.products };
    });
  },

  decreaseProductQuantity: (product: Product, quantity: number) => {
    set((state) => {
      if (state.products) {
        const productToDecrease = foundProductInCart(product, state.products);
        if (productToDecrease) {
          state.products = state.products.map((cartProduct) => {
            if (cartProduct.product === product) {
              return {
                ...cartProduct,
                quantity: Math.max(cartProduct.quantity - quantity, 0), // Ensure quantity is non-negative
              };
            } else {
              return cartProduct;
            }
          });
        }
      }
      return { products: state.products };
    });
  },
}));


function foundProductInCart(
  product: Product,
  cart: CartProduct[] | undefined
): CartProduct | undefined {
  if (cart) {
    return cart?.find((x) => x.product === product);
  }
}
