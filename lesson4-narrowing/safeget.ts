function safeGet(arg1: any[], arg2: number) {
  if (arg1.length - 1 > arg2) {
    return arg1[arg2]
  } else {
    return undefined;
  }
}


const names: string[] = ["John", "Jane"];
const nameD = safeGet(names, 2); // Should return undefined

const numbers: number[] = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2

console.log(nameD)
console.log(number)