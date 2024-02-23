var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var productsNew = [
    {
        id: 1,
        name: "Sample Product",
        price: 49.99,
        description: "A sample product for demonstration",
    },
];
function updateProduct(productId, updatedValues) {
    var found = false;
    for (var index = 0; index < productsNew.length; index++) {
        if (productsNew[index].id === productId) {
            productsNew[index] = __assign(__assign({}, productsNew[index]), updatedValues);
            found = true;
            console.log('product updated');
        }
    }
    if (!found) {
        console.log('product not found');
    }
}
updateProduct(1, {
    name: "Updated Product Name",
    price: 99.99,
});
console.log(productsNew[0]);
