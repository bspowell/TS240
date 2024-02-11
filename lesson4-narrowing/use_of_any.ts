function processInput(input: any) {
 switch(typeof input) {
  case 'string':
    console.log(input.toUpperCase());
    break;
  case 'number':
    console.log(input.toFixed(2))
    break;
  default:
    console.log(input.length)
 }
}

processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3