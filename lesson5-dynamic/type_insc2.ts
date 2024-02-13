interface ProductTwo {
  name: string;
  price: number;
}

interface ShippingTwo {
  weight: number;
  shippingCost: number;
}

interface Shippable extends ShippingTwo, ProductTwo {}

const itemTwo: Shippable = {
  name: 'Dog',
  price: 20,
  weight: 20,
  shippingCost: 30,
}