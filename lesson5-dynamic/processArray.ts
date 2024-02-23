type CustomArray = {
  [index: number]: string | number;
};

const customArray: CustomArray = ["apple", 42, "banana"];

function processCustomArray(arr: CustomArray) {
  if (Array.isArray(arr)) {
    return arr.filter(ele => typeof ele === 'string').map(ele => ele.toUpperCase())
  }
}

console.log(processCustomArray(customArray))
