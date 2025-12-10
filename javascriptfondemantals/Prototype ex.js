// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayGoodbye = function() {
    return `${this.name} says goodbye.`;
}
// Adding a method to the prototype
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Creating an instance of Person
const person1 = new Person("Charlie", 40);
console.log(person1.greet()); // Output: Hello, my name is Charlie and I am 40 years old.

// Modifying the prototype by adding a new method



// Creating another instance
const person2 = new Person("David", 50);

// Accessing the new method added to the prototype
console.log(person2.sayGoodbye()); // Output: David says goodbye.
