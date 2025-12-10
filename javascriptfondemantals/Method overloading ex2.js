function mult(a, b, c) { 
  if (a === undefined && b !== undefined && c !== undefined) {
    return `The value of Mult is ${b * c}`;
  } 
  else if (a !== undefined && b !== undefined && c !== undefined) {
    return `The value of Mult is ${a * b * c}`;
  } 
  else if (b === undefined && a !== undefined && c !== undefined) {
    return `The value of Mult is ${a * c}`;
  } 
  else if (c === undefined && a !== undefined && b !== undefined) {
    return `The value of Mult is ${a * b}`;
  } 
  else if (c === undefined && b === undefined && a !== undefined) {
    return `The value of Mult is ${a * a}`;
  } 
  else if (a === undefined && b === undefined && c !== undefined) {
    return `The value of Mult is ${c * c}`;
  } 
  else if (a === undefined && c === undefined && b !== undefined) {
    return `The value of Mult is ${b * b}`;
  } 
  else {
    return "The value entered is invalid";
  }
}

// Test cases
console.log(mult(4, 5, undefined)); 
console.log(mult(undefined, 2, 3));    // The value of Mult is 6
console.log(mult(4, 2, 3));           // The value of Mult is 24
console.log(mult(3, undefined, 2));   // The value of Mult is 6
  // The e of Mult is 20

  
  
  
  
  
  
  