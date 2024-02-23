function isStringArray(arg) {
    return arg.every(function (ele) { return typeof ele === 'string'; });
}
console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(["test", "string"]));
