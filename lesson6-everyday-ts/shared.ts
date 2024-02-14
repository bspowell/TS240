interface Rectangle extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number;
}

interface Shape {
  color: string;
}

function displayShapeInfo(shape: Shape): string {
  return `This shape is ${shape.color}`;
}