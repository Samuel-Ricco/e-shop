"use client"
import Link from "next/link";
import Container from "../container/Container";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "@/hooks/CartHooks";

const NavBar = () => {
  const cart = useCart();

  return (
    <div
      className="
      sticky
      top-0
      w-full
      bg-slate-200
      z-30
      shadow-sm"
    >
      <div
        className="
        py-4
        border-b-[1px]"
      >
        <Container>
          <div
            className="
            flex
            items-center
            justify-between
            gap-3
            md-gap-0"
          >
            <Link href="/" className="font-extrabold text-2xl text-orange-500">
              E-Shop Logo
            </Link>

            <div className="hidden md:block">Search</div>

            <div
              className="
              flex
              items-center
              gap-8
              md:gap.12"
            >
              <div className="relative cursor-pointer">
                <Link href={"/cart"}>
                  <div className="text-3xl">
                    <CiShoppingCart />
                  </div>

                  <span
                    className="
                    absolute
                    top-[-10px]
                    right-[-10px]
                    bg-slate-700
                    text-white
                    h-6
                    w-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-sm"
                  >
                    {cart.getCartNumber()}
                  </span>
                </Link>
              </div>

              <div>User</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
<div>NavBar</div>;
