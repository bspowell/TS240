type Animal = {
  name: string;
  species: string;
  age: number;
  isEndangered: boolean;
};

const tiger: Animal = {
  name: "Felix",
  species: "Panthera tigris",
  age: 7,
  isEndangered: true,
};

function getAnimalProp(animal: Animal, key: keyof Animal): unknown {
  return animal[key];
}

getAnimalProp(tiger, "species"); // Returns 'Panthera tigris'