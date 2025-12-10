class Calculator {
  constructor() {
    this.num1 = 0; // Default value
    this.num2 = 0; // Default value
  }

  // Arrow function for setting numbers
  setNumbers = (n1, n2) => {
    this.num1 = n1;
    this.num2 = n2;
  };

  // Arrow function for adding numbers
  add = () => {
    return this.num1 + this.num2;
  };

  // Arrow function for subtracting numbers
  subtract = () => {
    return this.num1 - this.num2;
  };
}

// Creating an instance of the class
const calc = new Calculator();

// Setting numbers using the arrow function
calc.setNumbers(10, 5);

// Using the arrow function methods
console.log(`Addition: ${calc.add()}`);       // Output: Addition: 15
console.log(`Subtraction: ${calc.subtract()}`); // Output: Subtraction: 5
