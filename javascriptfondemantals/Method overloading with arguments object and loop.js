function add() {
  if (arguments.length > 0) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(`The addition is ${sum}`);
    return sum;
  } else {
    console.log("The input is invalid");
    return null; // Return null for invalid input
  }
}

// Test cases
add(1);        // Outputs: The addition is 2
add(1, 2);     // Outputs: The addition is 3
add(1, 2, 3);  // Outputs: The addition is 6
add();         // Outputs: The input is invalid
add(1,3,5,6);
add(3,5,7,8,6,7,2);