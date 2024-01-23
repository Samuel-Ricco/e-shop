import { Product } from "@/model/Product";
import { create } from "zustand";

type ProductHook = {
  products: Product[];
  getProducts: () => Promise<void>;
  getProductFromId: (productId: string) => Product | null;
};

export const useProduct:any = create<ProductHook>((set) => ({
  products: [],

  getProducts: async () => {
    const JSONProducts = await fetchData();

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
  },

  getProductFromId: (productId: string) => {
    const product = useProduct.getState().products.find((product: Product) => product.id === parseInt(productId, 10));
    return product || null;
  },  
}));

async function fetchData(): Promise<any> {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();
  return json;
}
