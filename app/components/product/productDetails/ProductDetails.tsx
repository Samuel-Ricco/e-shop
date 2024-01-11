"use client";

import { ProductHelper } from "@/utils/productHelper";
import React, { useEffect } from "react";

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
      <div>
        Images
      </div>

      <div>
        {product? product.name:productId}
      </div>
    </div>
  );
};

export default ProductDetails;
