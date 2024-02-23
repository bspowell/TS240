function AddFunction(x: number, y: number): number {
	return x + y;
}

type AddFunctionType = typeof AddFunction // (x: number, y: number) => number;
type AddParameters = Parameters<AddFunctionType>; // Equivalent to [number, number]
const params: AddParameters = [1, 2];
console.log(params)
// const params: AddParameters = [1, 2, 3]; // Error: Type '[number, number, number]' is not assignable to type '[number, number]'
// const params: AddParameters = [1, "2"]; // Error: Type 'string' is not assignable to type 'number'