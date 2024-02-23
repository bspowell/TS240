interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
const productsNew: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

function updateProduct(
  productId: number,
  updatedValues: Partial<Product>
): void {
  let found = false;
  for (let index = 0; index < productsNew.length; index++) {
    if (productsNew[index].id === productId) {
      productsNew[index] = {...productsNew[index], ...updatedValues}
      console.log('product updated')
      found = true;
    }
  }
  if (!found) { console.log('product not found')}
}

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});

console.log(productsNew[0])

// {
//   id: 1,
//   name: 'Updated Product Name',
//   price: 99.99,
//   description: 'A sample product for demonstration'
// }