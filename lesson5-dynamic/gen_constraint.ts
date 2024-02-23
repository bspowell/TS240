type cat = {
  says: string
}


type Dog = {
  barks: string,
  legs: number,
  run?: string
}

let woof: Dog = {
  barks: 'woof',
  legs: 4
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let pet = getProperty(woof, 'barks')