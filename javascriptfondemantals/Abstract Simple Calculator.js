//A calculator class where users can add and subtract numbers, while the internal logic for these operations is hidden

class Calculator {
  constructor(initialValue) {
    // Public property to store the current value
    this.initialValue = initialValue;
  }

  // Public method to add a number
  add(number) {
    this.#logOperation("addition",number); // Calling private method
    this.initialValue+= number;
    return this.initialValue; // Return updated value
  }

  // Public method to subtract a number
  subtract(number) {
    this.#logOperation("subtraction",number); // Calling private method
    this.initialValue-= number;
    return this.initialValue; // Return updated value
  }

  // Private method to log operations (hidden from the user)
  #logOperation(operation,number) {
    console.log(`Performing ${operation} with ${number}`);
  }
}

// Usage
const calc = new Calculator(10); // Start with initial value 10
console.log(calc.add(5)); // Outputs: Performing add with 5 \n 15
console.log(calc.subtract(3)); // Outputs: Performing subtract with 3 \n 12

// Trying to access private method directly (will throw an error)
// calc.#logOperation("add", 5);
