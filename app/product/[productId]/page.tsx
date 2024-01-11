"use client" 
import Container from "@/app/components/container/Container";
import ProductDetails from "@/app/components/product/productDetails/ProductDetails";
import { getURL } from "next/dist/shared/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";


const Product = ({params}:{params:IParams}) => {

    console.log("params", params)  

    const getProductId =()=>{
        return usePathname().replace("/product/", "");
    }

    return ( <div className="p-8">
     <Container>
        <ProductDetails productId={getProductId()}/>
     </Container>
    </div> );
}
 
export default Product;