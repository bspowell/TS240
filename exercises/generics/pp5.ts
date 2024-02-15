function filterByType<T>(array: any[], type: T): Array<T> {
  return array.filter(obj => { (typeof obj === type) })
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"));
