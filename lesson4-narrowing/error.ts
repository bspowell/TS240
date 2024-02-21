// Shape definitions above
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Triangle = {
  kind: 'triangle'
}
type Shape = Circle | Square | Triangle;

function describeShape(shape: Shape) {
  let area: number;

  switch (shape.kind) {
    case "circle":
      area = Math.PI * shape.radius ** 2;
      break;
    case "square":
      area = shape.sideLength ** 2;
      break;
    case 'triangle':
      area = 3
      break;
    default:
      const _exhaustiveCheck: never = shape;
      // Type 'Triangle' is not assignable to type 'never'.
      throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
  }

  console.log("The area is " + area);
}