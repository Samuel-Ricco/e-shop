"use client";
import Image from "next/image";
import Container from "./components/container/Container";
import HomeBanner from "./components/home/HomeBanner";
import ProductCard from "./components/product/productCard/ProductCard";
import { useEffect } from "react";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useProduct } from "@/hooks/ProductsHook";
import { Product } from "@/model/Product";

export default function Home() {
  const productHook = useProduct();

  useEffect(() => {
    productHook.getProducts();
  }, [productHook]);

  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>

        {productHook.products.length === 0 ? (
          <div className="flex justify-center pt-20">
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
        ) : (
          <div
            className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8"
          >
            {productHook.products.map((product: Product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
