function displayProductListing(product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price));
    console.log("Image: ".concat(product.image));
}
function displayProductDetail(product) {
    console.log("Description: ".concat(product.description));
    console.log("Size options: ".concat(product.size.join(", ")));
    console.log("Color options: ".concat(product.color.join(", ")));
}
// const products: Array<Product> = fetchProductsFromServer(); // Returns an array of products from the server
var prod1 = {
    id: 1,
    name: 'string',
    description: 'string',
    price: 1,
    color: ['blue', 'pink'],
    size: ['M', 'L'],
    image: 'img'
};
var prod2 = {
    id: 2,
    name: 'string2',
    description: 'string2',
    price: 2,
    color: ['green', 'yelloow'],
    size: ['S', 'XL'],
    image: 'img2'
};
var products = [prod1, prod2];
products.forEach(function (product) {
    displayProductListing(product);
    displayProductDetail(product);
});
