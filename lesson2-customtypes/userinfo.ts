function concatenateStrings(a: string, b: string): string {
  return a + b;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

function join(a: stringNum, b: stringNum): string | number {
  if (typeof a === 'string' && typeof b === 'string') {
    let mystring: string;
    mystring = a + b;
    return mystring;
  } else if (typeof a === 'number' && typeof b === 'number') {
    let myNum: number;
    myNum = a + b;
    return myNum;
  } else {
    throw new Error('Invalid both tpye')
  }
}
type stringNum = string | number
const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);