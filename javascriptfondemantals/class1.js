class Person {
  constructor(name, age) {
    this.name = name; // Property
    this.age = age;   // Property
  }

  greet() { // Method
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating objects (instances) of the class
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

person1.greet(); // Output: Hi, my name is John and I'm 25 years old.
person2.greet(); // Output: Hi, my name is Jane and I'm 30 years old.
