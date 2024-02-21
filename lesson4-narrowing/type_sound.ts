function isNumber(num: unknown): num is Number {
  return typeof num === 'number'
}

// example 1
let x: any = "Launch School";
let y: Number;
if (isNumber(x)) {
  y = x;
  console.log(y);
} else {
  console.log(x);
}
