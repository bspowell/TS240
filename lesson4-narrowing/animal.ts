type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Animal = Elephant | Tiger | Peacock ;

 function describeAnimal(animal: Animal): string {
  
  switch(animal.kind) {
    case "elephant":
      return `I'm a ${animal.kind} and I weigh ${animal.weight}`
      break;
    case "peacock":
      return `I'm a ${animal.kind} and I have ${animal.featherLength} feathers`
      break;
    case "tiger":
      return `I'm a ${animal.kind} and I run ${animal.speed}km/h`
      break;
    default:
      const _exhaustiveCheck: never = animal;

      throw new Error (`Invalid shape ${JSON.stringify(_exhaustiveCheck)}`)
  }
}

const elTiger: Tiger = { kind: 'tiger', speed: 80 }
console.log(describeAnimal(elTiger))