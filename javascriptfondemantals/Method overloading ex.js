function add(a, b, c) {
  if (a === undefined) {
    // If 'a' is undefined, add b and c
    return `The Sum1 is ${b + c}`;
  } else if (b === undefined && c !== undefined) {
    // If 'b' is undefined but 'c' exists, sum c with itself
    return `The Sum2 is ${c + c}`;
  } else if (b !== undefined && c !== undefined) {
    // If all arguments are provided
    return `The Sum3 is ${a + b + c}`;
  } else {
    return "Invalid input. Please provide appropriate arguments.";
  }
}

// Testing the function
console.log(add(undefined, 3, 4)); // "The Sum1 is 7"
console.log(add(2, undefined, 4)); // "The Sum2 is 8"
console.log(add(2, 3, 4));         // "The Sum3 is 9"
console.log(add(2));               // "Invalid input. Please provide appropriate arguments."
