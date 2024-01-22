import { Product } from "@/model/Product";
import { create } from "zustand";

type ProductHook = {
  products: Product[];
  getProducts: () => void;
  getProductFromId: (productId: string) => Promise<Product | null>;
};

export const useProduct = create<ProductHook>((set) => ({

  products:[],

  getProducts: () => {
    fetchData().then((JSONProducts) => {
      const fetchedProducts: Product[] = JSONProducts.map((element: any) => {
        return new Product(
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
      });

      set({ products: fetchedProducts });
    });
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