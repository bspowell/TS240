// function assertNever(arg: never):never {
//   throw new Error (`unhandled value`)
// }
function getArea(arg) {
    if ('radius' in arg) {
        return Math.pow(arg.radius, 2) * Math.PI;
    }
    else if (arg.kind === 'square') {
        return arg.sidelength * arg.sidelength;
    }
    else {
        var _x = arg;
        throw new Error("unhandled shape ".concat(_x));
    }
}
console.log(getArea({ kind: 'circle', radius: 10 }));
console.log(getArea({ kind: 'square', sidelength: 10 }));
