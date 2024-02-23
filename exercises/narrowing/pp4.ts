type Circle = {
  kind: 'circle'
  radius: number
}

type Square = {
  kind: 'square'
  sidelength: number
}


type Shape = Circle | Square

// function assertNever(arg: never):never {
//   throw new Error (`unhandled value`)
// }

function getArea(arg: Shape): number {
  if ('radius' in arg) {
    return arg.radius ** 2 * Math.PI
  } else if (arg.kind === 'square') {
    return arg.sidelength * arg.sidelength
  } else {
    let _x: never = arg
    throw new Error(`unhandled shape ${_x}`)
  }
}

console.log(getArea({kind: 'circle', radius: 10}))
console.log(getArea({kind: 'square', sidelength: 10}))
