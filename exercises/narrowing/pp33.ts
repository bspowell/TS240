function short(arg: string | undefined): void {
  arg && console.log('Input is defined and not empty')
}

short('hello')
short('')
short(undefined)