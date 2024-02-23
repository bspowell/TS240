
function printLengthy(arg: string | string[]): void {
  if (typeof arg === 'string') {
    console.log(`string lenght: ${arg.length}`)
  } else {
    console.log(`Array count: ${arg.length}`)
  }
}

printLengthy('hello')
printLengthy(['hi', 'bye'])