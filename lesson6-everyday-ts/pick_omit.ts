// Full product type with all properties
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  color: string[];
  size: string[];
  image: string;
};

// Using Pick to select only the properties needed for the product listing page
type ProductListing = Pick<Product, "name" | "price" | "image">;

// Using Pick to select only the properties needed for the product detail page
type ProductDetail = Pick<Product, "description" | "size" | "color">;

function displayProductListing(product: Product) {
  console.log(`Name: ${product.name}`);
  console.log(`Price: ${product.price}`);
  console.log(`Image: ${product.image}`);
  console.log(`Description: ${product.description}`);
  console.log(`Size options: ${product.size.join(", ")}`);
  console.log(`Color options: ${product.color.join(", ")}`);
}

// function displayProductDetail(product: ProductDetail) {
//   console.log(`Description: ${product.description}`);
//   console.log(`Size options: ${product.size.join(", ")}`);
//   console.log(`Color options: ${product.color.join(", ")}`);
// }

// const products: Array<Product> = fetchProductsFromServer(); // Returns an array of products from the server

let prod1: Product = {
    id: 1,
    name: 'string',
    description: 'string',
    price: 1,
    color: ['blue', 'pink'],
    size: ['M', 'L'],
    image: 'img'
  }

let prod2: Product = {
  id: 2,
  name: 'string2',
  description: 'string2',
  price: 2,
  color: ['green', 'yelloow'],
  size: ['S', 'XL'],
  image: 'img2'
}
  let products: Array<Product> = [prod1, prod2];

products.forEach((product) => {
  displayProductListing(product);
  // displayProductDetail(product);
});