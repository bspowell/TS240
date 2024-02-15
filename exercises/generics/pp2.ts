function printId(param: string | number): void {
  if(typeof param === 'number') {
    console.log('Your ID is a number')
  } else {
    console.log('Your ID is a string')
  }
}