export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  reviews: { count: number; rate: number };

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    category: string,
    image: string,
    reviews: { count: number; rate: number }
  ) {
      (this.id = id),
      (this.title = name),
      (this.description = description),
      (this.price = price),
      (this.category = category),
      (this.image = image);
      this.reviews = reviews;
  }
}
