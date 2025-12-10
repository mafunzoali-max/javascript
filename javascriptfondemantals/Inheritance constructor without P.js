// Parent class
class Parent {
    constructor() {
        this.property = "Parent Property";
    }

    method() {
        console.log("Method from parent");
    }
}

// Child class inheriting from the parent
class Child extends Parent {
    constructor() {
        super(); // Calls the parent class's constructor
        this.childProperty = "Child Property";
    }

    childMethod() {
        console.log("Method from child");
    }
}

// Creating an instance of the child class
const childInstance = new Child();

// Accessing inherited and child-specific properties and methods
console.log(childInstance.property);  // Output: Parent Property
childInstance.method();               // Output: Method from parent
childInstance.childMethod();          // Output: Method from child
console.log(childInstance.childProperty);