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

type Animal = Elephant | Tiger | Peacock;

function describeAnimal(animal: Animal): string {
  let words;
  switch(animal.kind) {
    case "elephant":
      words = `An ${animal.kind} weighs ${animal.weight}kg`
      break;
    case 'tiger':
      words = `a ${animal.kind} can run at ${animal.speed} km/hr`
      break;
    case 'peacock':
      words = `a ${animal.kind} has feathers as long as ${animal.featherLength}`
      break;
    default:
      const _exchaustiveCheck: never = animal
      throw new Error (`invalid animal: ${JSON.stringify(_exchaustiveCheck)}`)
  }
  return words
}