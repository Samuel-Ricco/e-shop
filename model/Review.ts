class Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdDate: string;
  user: User;

  constructor(
    id: string,
    product: Product,
    rating: number,
    comment: string,
    createdDate: string,
    user: User
  ) {
    this.id = id;
    (this.userId = user.id),
      (this.productId = product.id),
      (this.rating = rating),
      (this.comment = comment),
      (this.createdDate = createdDate),
      (this.user = user);
  }
}
