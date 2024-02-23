type Animal = {
	species: string
	legs: string
  wings: string
}

let dog: Partial<Animal> = {
	species: 'canine',
  legs: '4'
}