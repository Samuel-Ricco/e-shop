"use client";
import { useCart } from "@/hooks/CartHooks";
import { CartProduct } from "@/model/CartProduct";
import { priceFormatter } from "@/utils/priceFormatter";
import { textCutter, textCutterCart } from "@/utils/textCutter";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import SetQuantity from "../components/product/SetQuantity";

interface CartItemProps {
  cartProduct: CartProduct;
}

const CartItem: React.FC<CartItemProps> = ({ cartProduct }) => {
  const cart = useCart();

  const removeProduct = useCallback(() => {
    cart.removeProduct(cartProduct);
  }, []);

  const increaseQuantityHandler = useCallback(() => {
    cart.increaseProductQuantity(cartProduct.product, 1);
  }, []);

  const decreaseQuantityHandler = useCallback(() => {
    cart.decreaseProductQuantity(cartProduct.product, 1);
  }, []);

  return (
    <div
      className="
      grid
      grid-cols-5
      text-xs
      md:text-sm
      gap-4
      border-t-[1.5px]
      border-slate-200 
      py-4
      items-center"
    >
      <div
        className="
        col-span-2
        justify-self-start
        flex
        gap-2
        md:gap-4"
      >
        <Link href={`/product/${cartProduct.product.id}`}>
          <div
            className="
            relative
            w-[70px]
            aspect-square"
          >
            <Image
              className="object-contain"
              src={cartProduct.product.image}
              alt={cartProduct.product.title}
              fill
            />
          </div>
        </Link>

        <div
          className="
          flex
          flex-col
          justify-between"
        >
          <Link href={`/product/${cartProduct.product.id}`}>
            {textCutterCart(cartProduct.product.title)}
          </Link>

          <div className="w-[70px]">
            <button
              className="text-slate-500 underline"
              onClick={removeProduct}
            >
              {" "}
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="justify-self-center">
        {priceFormatter(cartProduct.product.price)}
      </div>

      <div className="justify-self-center">
        <SetQuantity
          cartProduct={cartProduct}
          quantityDecreaseHandeler={decreaseQuantityHandler}
          quantityIncreaseHandeler={increaseQuantityHandler}
        />
      </div>

      <div className="justify-self-end font-semibold">
        € {cart.getProductTotal(cartProduct)}
      </div>
    </div>
  );
};

export default CartItem;
