function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Invoke the callback function
}

function farewell() {
  console.log("Goodbye!");
}

// Call the greet function and pass farewell as a callback
greet("Alice", farewell);

// Output:
// Hello, Alice!
// Goodbye!
