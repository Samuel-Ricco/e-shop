"use client";
import Image from "next/image";
import Container from "./components/container/Container";
import HomeBanner from "./components/home/HomeBanner";

import ProductCard from "./components/product/productCard/ProductCard";
import { useEffect } from "react";
import { ProductHelper } from "@/utils/productHelper";
import React from "react";
import { Product } from "@/model/Product";
import { TailSpin } from "react-loader-spinner";

export default function Home() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await ProductHelper.getProducts();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>

        {isLoading ? (
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
            {products.map((product) => (
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
