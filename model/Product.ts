class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  images: ProductImage[];
  reviews: Review[];

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    brand: string,
    category: string,
    inStock: boolean,
    images: ProductImage[]
  ) {
    (this.id = id),
      (this.name = name),
      (this.description = description),
      (this.price = price),
      (this.brand = brand),
      (this.category = category),
      (this.inStock = inStock),
      (this.images = images);
      (this.reviews = []);
  }

  
}
