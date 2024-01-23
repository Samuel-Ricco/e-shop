"use client";

import { Product } from "@/model/Product";

import { Rating } from "@mui/material";

import React, { useCallback, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import HorizontalLine from "../../styleComponents/HorizontalLine";
import SetQuantity from "../SetQuantity";
import { CartProduct } from "@/model/CartProduct";
import CustomButton from "../../CustomButton";
import Image from "next/image";
import { useCart } from "@/hooks/CartHooks";
import { useProduct } from "@/hooks/ProductsHook";

const ProductDetails: React.FC<IProductDetails> = ({ productId }) => {
  const [product, setProduct] = React.useState<Product | null>(null);
  const [cartProduct, setCartProduct] = React.useState<CartProduct | null>(
    null
  );

  const cartHook = useCart();
  const productHook = useProduct();

  const getData = () => {
    return productHook.getProductFromId(productId);
  };

  useEffect(() => {
    function getProduct() {
      try {
        const data = getData();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  }, []);

  //todo spostare on init
  useEffect(() => {
    if (product) {
      console.log("product", product);
      const newCartProduct = new CartProduct(product, 1);
      console.log("cartproduct", newCartProduct);
      setCartProduct(newCartProduct);
    }
  }, [product]);

  const quantityDecreaseHandeler = useCallback(() => {
    setCartProduct((prev) => {
      return {
        ...prev,
        quantity: (prev?.quantity ?? 0) - 1,
        product: prev?.product || undefined,
      } as CartProduct | null; // Aggiungi questa annotazione di tipo
    });
  }, []);

  const quantityIncreaseHandeler = useCallback(() => {
    setCartProduct((prev) => {
      return {
        ...prev,
        quantity: (prev?.quantity ?? 0) + 1,
        product: prev?.product || undefined,
      } as CartProduct | null;
    });
  }, []);

  const cartAddProduct = () => {
    if (cartProduct) {
      cartHook.addProduct(cartProduct);
    }

    console.log("bottone");
    console.log("cart", cartHook);
  };

  return (
    <div>
      {product ? (
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            gap-12
            pt-10"
        >
          <div className="xl:mr-80 pl-5 relative aspect-square">
            <Image
              className="h-full w-full object-contain max-h-[35rem] min-h-[300px]"
              src={product.image}
              fill
              alt={product.title}
            />
          </div>

          <div className="flex flex-col gap-4 text-slate-500 text-sm">
            <h2 className="mb-4 font-semibold text-3xl text-orange-500">
              {product.title}
            </h2>

            <div className="flex items-center gap-2">
              <Rating value={product.reviews.rate} readOnly />
              <div>{product.reviews.count} reviews</div>
            </div>

            <HorizontalLine />

            <div>{product.description}</div>

            <HorizontalLine />

            <div className="flex gap-8 items-center">
              <span className="font-semibold">CATEGORY: </span>
              {product.category}
            </div>

            <HorizontalLine />

            <SetQuantity
              cartProduct={
                cartProduct ? cartProduct : new CartProduct(product, 1)
              }
              quantityDecreaseHandeler={
                cartProduct?.quantity == 1 ? () => {} : quantityDecreaseHandeler
              }
              quantityIncreaseHandeler={quantityIncreaseHandeler}
            />

            <CustomButton label="Add to Cart" onClick={cartAddProduct} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="orange"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
