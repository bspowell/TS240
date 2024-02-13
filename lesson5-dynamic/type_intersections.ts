type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

type ShippableProduct = Product & Shipping

const item: ShippableProduct = {
  name: "Table",
  price: 20,
  weight: 20,
  shippingCost: 20,
}