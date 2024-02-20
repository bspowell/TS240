function filterByType<givenType>(array: any[], type: string): Array<givenType> {
  return array.filter(ele => {typeof ele === type })
}