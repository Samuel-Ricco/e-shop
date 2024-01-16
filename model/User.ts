class User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;

  constructor(
    id: number,
    email: string,
    username: string,
    password: string,
    name: {
      firstname: string;
      lastname: string;
    },
    address: {
      city: string;
      street: string;
      number: number;
      zipcode: string;
      geolocation: {
        lat: string;
        long: string;
      };
    },
    phone: string
  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
}
