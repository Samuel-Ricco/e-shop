
import Container from "@/app/components/container/Container";
import ProductDetails from "@/app/components/product/productDetails/ProductDetails";

import { getURL } from "next/dist/shared/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";


const Product =  ({params}:{params:IParams}) => {

    return ( <div className="p-8">
     <Container>
        <ProductDetails productId={params.productId.toString()}/>
     </Container>
    </div> );
}
 
export default Product;