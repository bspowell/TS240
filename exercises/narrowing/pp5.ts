function isString(arg: unknown): arg is string {
  return typeof arg === 'string'
}


function logUnknown (arg: unknown): void {
  if (isString(arg)) {
    console.log(arg)
  }
}

logUnknown('string')
