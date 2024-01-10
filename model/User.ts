class User {
  id: string;
  name: string;
  email: string;
  emailVerified:null| boolean;
  image: string;
  hashedPassword:null| string;
  createdAt: string;
  updatedAt: string;
  role: string;
  cart?:Product[]

  constructor(
    id: string,
    name: string,
    email: string,
    emailVerified: boolean,
    image: string,
    hashedPassword: string,
    createdAt: string,
    updatedAt: string,
    role: string
  ) {
    (this.id = id),
      (this.name = name),
      (this.email = email),
      (this.emailVerified = emailVerified),
      (this.image = image),
      (this.hashedPassword = hashedPassword),
      (this.createdAt = createdAt),
      (this.updatedAt = updatedAt),
      (this.role = role);
      (this.cart=[]);
  }
}
