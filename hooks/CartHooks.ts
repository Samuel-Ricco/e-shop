import { Cart } from "@/model/Cart";
import { CartProduct } from "@/model/CartProduct";
import { Product } from "@/model/Product";
import { create } from "zustand";


type CartHook = {
  cart: Cart;
  addProduct: (cartProduct:CartProduct)=>void;
  removeProduct:(cartProduct: CartProduct)=>void;
  increaseProductQuantity:(product: Product, quantity: number) => void;
  decreaseProductQuantity:(product: Product, quantity: number) => void;
};

export const useCart = create<CartHook>((set)=>({
  cart: new Cart(),

  addProduct: (cartProduct:CartProduct) => {
    set((state) => {
      state.cart.addProduct(cartProduct);
      return { cart: state.cart };
    })
  },

  removeProduct: (cartProduct:CartProduct) => {
    set((state) => {
      state.cart.removeProduct(cartProduct);
      return { cart: state.cart };
    })
  },

  increaseProductQuantity: (product: Product, quantity: number)=>{
    set((state) => {
      state.cart.increaseProductQuantity(product,quantity);
      return { cart: state.cart };
    })
  },

  decreaseProductQuantity: (product: Product, quantity: number)=>{
    set((state) => {
      state.cart.decreaseProductQuantity(product,quantity);
      return { cart: state.cart };
    })
  },
})

);