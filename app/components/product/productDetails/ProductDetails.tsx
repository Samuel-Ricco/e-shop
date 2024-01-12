"use client";

import { ProductHelper } from "@/utils/productHelper";
import PageLoader from "next/dist/client/page-loader";
import React, { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

const ProductDetails: React.FC<IProductDetails> = ({productId}) => {

  const [product,setProduct] = React.useState<Product|null>(null)

  useEffect(()=>{
    setProduct(getProduct())
  },[])

  const getProduct =()=>{
    return ProductHelper.getProductFromId(productId);
  }

  console.log("product", product)

  return (
    <div
      className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      gap-12"
    >
      {product?
      <div>
        
        <div>Immagine</div>

        <div>

          <h2 className="mb-4 font-semibold text-xl text-orange-500">
            {product.name}
          </h2>



        </div>
      </div>
      :
      <div className="flex">
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
      }
    </div>
  );
};

export default ProductDetails;
