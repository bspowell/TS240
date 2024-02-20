function identity<T, K>(arg1: T, arg2: K): Array<T | K> {
  return [arg1, arg2];
}

const pairOfNumbers = identity(1, '2'); // returns [1, 2]
const pairOfStrings = identity(true, "world"); // returns ["hello", "world"]

//<number, string>
//<boolean, string>