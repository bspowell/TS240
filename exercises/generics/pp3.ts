function firstElement(arr: any): unknown {
  if (Array.isArray(arr)) {
    return arr[0]
  } else {
    return undefined
  }
}