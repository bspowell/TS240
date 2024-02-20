function first<T>(arr: T[]): T {
  return arr[0];
}

const dasEle: string = first(["dog", "cat", "horse"]); // Type 'string | number' is not assignable to type 'string'. Type 'number' is not assignable to type 'string'