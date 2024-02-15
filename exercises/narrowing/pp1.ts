function printLength(param: string | string[]): void {
  if (Array.isArray(param)) {
    console.log(`Array count: ${param.length}`)
  } else {
    console.log(`String count: ${param.length}`)
  }
}