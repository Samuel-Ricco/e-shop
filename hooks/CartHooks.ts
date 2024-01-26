
import { CartProduct } from "@/model/CartProduct";
import { Product } from "@/model/Product";
import { textCutter } from "@/utils/textCutter";
import toast from "react-hot-toast";
import { create } from "zustand";

type CartHook = {
  products: CartProduct[] | undefined;
  addProduct: (cartProduct: CartProduct) => void;
  removeProduct: (cartProduct: CartProduct) => void;
  removeAllProduct:()=>void;
  increaseProductQuantity: (product: Product, quantity: number) => void;
  decreaseProductQuantity: (product: Product, quantity: number) => void;
  getProductTotal:(cartProduct: CartProduct) => number;
  getCartTotal:()=>number;
  getCartNumber:()=>number;
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

      toast.success(`${cartProduct.quantity} ${textCutter(cartProduct.product.title)} added to your cart`)
      return { products: state.products };
    });
  },

  removeProduct: (cartProduct: CartProduct) => {
    set((state) => {
      state.products = state.products?.filter((product) => product !== cartProduct);
      return { products: state.products };
    });
  },

  removeAllProduct:()=>{
    set((state) =>{
      state.products = [];
      return { products: state.products };
    })
    toast.success(`Your cart has been emptied`)
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
                quantity: Math.max(cartProduct.quantity - quantity, 1), // Ensure quantity is non-negative
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

  getProductTotal:(cartProduct:CartProduct)=>{
    const total = cartProduct.product.price * cartProduct.quantity;
    return total;
  },

  getCartTotal:()=>{
    var total = 0;
    useCart.getState().products?.forEach((cartProduct:CartProduct)=>{
      total += (cartProduct.product.price * cartProduct.quantity);
    })
    return total;
  },

  getCartNumber:()=>{
    var total = 0;
    useCart.getState().products?.forEach((cartProduct:CartProduct)=>{
      total += cartProduct.quantity;
    })
    return total;
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
