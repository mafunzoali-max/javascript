// Parent constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to the prototype of Person
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Child constructor function
function Student(name, age, grade) {
    Person.call(this, name, age);  // Inherit properties from Person
    this.grade = grade;
}

// Inheriting methods from Person's prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Adding new method to Student prototype
Student.prototype.study = function() {
    return `${this.name} is studying.`;
};

// Creating an instance of Student
const student1 = new Student("Bob", 20, "A");

// Accessing inherited and new methods
console.log(student1.greet());  // Inherited method: Output: Hello, my name is Bob and I am 20 years old.
console.log(student1.study());  // New method: Output: Bob is studying.
