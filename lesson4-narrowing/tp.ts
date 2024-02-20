function isString(s: unknown): s is string {
  return typeof s === 'string';
}

function toUpper(x: unknown) {
  if (isString(x)) {
     x.toUpperCase(); 
  }
}

let x = 'test'
toUpper(x)