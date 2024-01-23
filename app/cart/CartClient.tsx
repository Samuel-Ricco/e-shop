"use client";
import { useCart } from "@/hooks/CartHooks";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import CustomButton from "../components/CustomButton";

const CartClient = () => {
  const cart = useCart();

  return (
    <div>
      {cart.products?.length === 0 ? (
        <div
          className="
          flex
          flex-col
          items-center"
        >
          <div className="text-4xl font-bold text-orange-500">
            Your cart is empty
          </div>

          <div>
            <Link
              href={"/"}
              className="
              text-slate-500
              flex
              items-center
              gap-1
              mt-2"
            >
              <MdArrowBack />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="
            text-4xl 
            font-bold 
            text-orange-500 
            text-center 
            mb-4">
            Shopping Cart
          </div>

          <div
            className="
            grid
            grid-cols-5
            text-xs
            gap-4
            pb-2
            mt-8
            items-center"
          >
            <div className="col-span-2 justify-self-start">PRODUCT</div>
            <div className="justify-self-center">PRICE</div>
            <div className="justify-self-center">QUANTITY</div>
            <div className="justify-self-end">TOTAL</div>
          </div>

          <div>
            {cart.products &&
              cart.products.map((item) => {
                return <div key={item.product.id}>{item.product.title}</div>;
              })}
          </div>

          <div className="
            border-t-[1.5px] 
            border-slate-200 
            py-4 
            flex 
            justify-between 
            gap-4">
            <div className="w-[90px]">
              <CustomButton
                label="Clear Cart"
                small
                outline
                onClick={() => {}}
              />
            </div>

            <div className="
              text-sm
              flex
              flex-col
              gap-1
              items-start">
              <div className="
                flex
                justify-between
                w-full
                text-base
                font-semibold">
                <span>SubTotal</span>
                <span> total price</span>
              </div>

              <p>Taxes and sjipping calculated at checkout</p>

              <CustomButton label="Checkout" onClick={()=>{}}/>

              <Link
              href={"/"}
              className="
              text-slate-500
              flex
              items-center
              gap-1
              mt-2"
            >
              <MdArrowBack />
              <span>Continue Shopping</span>
            </Link>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default CartClient;
