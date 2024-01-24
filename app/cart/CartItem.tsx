"use client";
import { useCart } from "@/hooks/CartHooks";
import { CartProduct } from "@/model/CartProduct";
import { priceFormatter } from "@/utils/priceFormatter";
import { textCutter, textCutterCart } from "@/utils/textCutter";
import Link from "next/link";
import { useCallback } from "react";

interface CartItemProps {
  cartProduct: CartProduct;
}

const CartItem: React.FC<CartItemProps> = ({ cartProduct }) => {
  const cart = useCart();

  const removeProduct =useCallback(()=>{
    cart.removeProduct(cartProduct);
  },[])

  return (
    <div
      className="
      grid
      grid-cols-5
      text-xs
      md:text-sm
      gap-4
      border-{1.5px]
      border-t-slate-200
      py-4
      item-center"
    >
      <div
        className="
        cols-span-2
        justify-self-start
        flex
        gap-2
        md:gap-4"
      >
        <Link href={`/product/${cartProduct.product.id}`}>
          <div></div>
        </Link>

        <div
          className="
          flex
          flex-col
          justify-between"
        >
          <Link href={`/product/${cartProduct.product.id}`}>
            {textCutterCart (cartProduct.product.title)}
          </Link>

          <div className="w-[70px]">
            <button className="text-slate-500 underline"
              onClick={removeProduct}
            > Remove</button>
          </div>
        </div>
      </div>

      <div>{priceFormatter(cartProduct.product.price)}</div>

      <div></div>

      <div></div>
    </div>
  );
};

export default CartItem;
