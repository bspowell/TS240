type CustomArray = {
  [index: number]: string | number;
};

function processCustomArray(arr: CustomArray) {
  if (Array.isArray(arr)) {
    return arr
    .filter(obj => { typeof obj === 'string' })
    .map(obj => obj.toUpperCase())
  }
}

const customArray: CustomArray = ["apple", 42, "banana"];
console.log(processCustomArray(customArray))