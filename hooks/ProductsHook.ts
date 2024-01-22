import { Product } from "@/model/Product";
import { create } from "zustand";

type ProductHook = {
  getProducts: () => Promise<Product[]>;
  getProductFromId: (productId: string) => Promise<Product | null>;
};

export const useProduct = create<ProductHook>((set) => ({

  getProducts: async () => {
    const JSONProducts = await fetchData();

    var products: Product[] = [];
    JSONProducts.forEach((element: any) => {
      const product = new Product(
        element.id,
        element.title,
        element.description,
        element.price,
        element.category,
        element.image,
        {
          count: element.rating.count,
          rate: element.rating.rate,
        }
      );

      products.push(product);
    });

    return products;
  },

    getProductFromId: async (productId: string) => {
    const product = await fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json());
    return product;
  }
}));

async function fetchData(): Promise<any> {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();
  return json;
}