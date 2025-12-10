class Abdoul {
  #age; // Private field

  constructor(initialAge) {
    if (initialAge >= 0) {
      this.#age = initialAge; // Initialize the private field and age can not be zero
    } else {
      console.log("Invalid initial age");
      this.#age = 0; // Default to 0 if invalid
    }
  }

  // Getter method to access the private age field
  getAge() {
    return this.#age;
  }

  // Setter method to modify the private age field
  setAge(valueAge) {
    if (valueAge > 0) {
      this.#age = valueAge;
    } else {
      console.log("Invalid value for age");
    }
  }
}

// Example usage
const abdoulAge = new Abdoul(26); // Create an object with initial age
console.log(abdoulAge.getAge()); // Output: 26

abdoulAge.setAge(27); // Update the age
console.log(abdoulAge.getAge()); // Output: 27

abdoulAge.setAge(-5); // Invalid value for age
// Output: Invalid value for age
abdoulAge.setAge(0);