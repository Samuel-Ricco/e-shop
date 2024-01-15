"use client";

import { Product } from "@/model/Product";
import { ProductHelper } from "@/utils/productHelper";
import { Rating } from "@mui/material";
import PageLoader from "next/dist/client/page-loader";
import React, { useCallback, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import HorizontalLine from "../../styleComponents/HorizontalLine";
import SetQuantity from "../SetQuantity";
import { CartProduct } from "@/model/CartProduct";

const ProductDetails: React.FC<IProductDetails> = ({ productId }) => {
  const [product, setProduct] = React.useState<Product | null>(null);

  useEffect(() => {
    async function getProduct() {
      try {
        const data = await ProductHelper.getProductFromId(productId);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  }, []);

  const quantityDecreaseHandeler = useCallback(() => {}, []);

  const quantityIncreaseHandeler = useCallback(() => {}, []);

  console.log("product", product);

  return (
    <div>
      {product ? (
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            gap-12"
        >
          <div>Immagine</div>

          <div className="flex flex-col gap-1 text-slate-500 text-sm">
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
              cartProduct={new CartProduct(product, 1)}
              quantityDecreaseHandeler={quantityDecreaseHandeler}
              quantityIncreaseHandeler={quantityIncreaseHandeler}
            />
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
