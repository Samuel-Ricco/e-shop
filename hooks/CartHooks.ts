
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

      const productInCart = foundProductInCart(cartProduct.product, state.products)
      if (productInCart) {
        state.products = state.products?.map((productInCart) => {
          if (productInCart.product === cartProduct.product) {
            return {
              ...cartProduct,
              quantity: productInCart.quantity + cartProduct.quantity,
            };
          } else {
            return cartProduct;
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
      const productToRemove = foundProductInCart(cartProduct.product, state.products);

      if (productToRemove) {
        state.products?.filter((product) => {
          product !== productToRemove;
        });
      }

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
        const productToIncrease = foundProductInCart(product, state.products);

        if (productToIncrease) {
          state.products = state.products?.map((cartProduct) => {
            if (cartProduct.product === product) {
              return {
                ...cartProduct,
                quantity: cartProduct.quantity - quantity,
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
