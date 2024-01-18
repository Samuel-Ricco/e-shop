import { Product } from "@/model/Product";


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
        element.title,  // Correggi il nome del campo da 'name' a 'title'
        element.description,
        element.price,
        element.category,
        element.image,  // Correggi il nome del campo da 'images' a 'image'
        {
          count: element.rating.count,
          rate: element.rating.rate,
        }
      );

      products.push(product);
    });

    return products;
  };

  //todo
  static getProductFromId = async (productId: string) => {
    const products = await ProductHelper.getProducts();
    return (
      products?.find(
        (product: { id: number }) => product.id === parseInt(productId)
      ) || null
    );
  };
}
