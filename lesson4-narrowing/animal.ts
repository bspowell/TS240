type Dog = {
  name: string,
  age: number
}

type Bird = {
  name: string,
  wingspan: number,
}

type Animal = Dog | Bird // implementation for Animal

 function describeAnimal(animal: Animal): string {
  if ('wingspan' in animal) {
    return `${animal.name} is a bird with a ${animal.wingspan}cm wingspan`
  } else {
    return `${animal.name} is a ${animal.age} year old dog`
  }
}

describeAnimal({name: 'rover', age: 1})