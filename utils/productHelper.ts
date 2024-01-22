import { Product } from "@/model/Product";

//TODO spostare in un nuovo store
export class ProductHelper {
  private static fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    return json;
  };

  static getProducts = async () => {
    const JSONProducts = await ProductHelper.fetchData();

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
  };

  //TODO on ottenere tutti ma solo quello che mi serve
  static getProductFromId = async (productId: string) => {
    const products = await ProductHelper.getProducts();
    return (
      products?.find(
        (product: { id: number }) => product.id === parseInt(productId)
      ) || null
    );
  };
}
