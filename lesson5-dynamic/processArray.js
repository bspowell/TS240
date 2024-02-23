var customArray = ["apple", 42, "banana"];
function processCustomArray(arr) {
    if (Array.isArray(arr)) {
        return arr.filter(function (ele) { return typeof ele === 'string'; }).map(function (ele) { return ele.toUpperCase(); });
    }
}
console.log(processCustomArray(customArray));
