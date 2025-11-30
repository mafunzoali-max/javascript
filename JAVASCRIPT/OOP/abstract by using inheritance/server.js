// Base class (General abstraction)
class Shape {
  constructor(name) {
    this.name = name; // Common property for all shapes
  }
  
  // General method
  describe() {
    return `This is a ${this.name}.`;
  }
  
  // Abstract method to calculate area (to be overridden)
  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented in child or chidren class(es).");
  }
}

// Derived class for Circle
class Circle extends Shape {
  constructor(radius) {
    super("Circle"); // Call the base class constructor
    this.radius = radius;
  }
  
  // Override calculateArea method
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Derived class for Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }
  
  // Override calculateArea method
  calculateArea() {
    return this.width * this.height;
  }
}

// Using the classes
const circle = new Circle(5);
console.log(circle.describe()); // "This is a Circle."
console.log("Area:", circle.calculateArea()); // "Area: 78.53981633974483"

const rectangle = new Rectangle(10, 20);
console.log(rectangle.describe()); // "This is a Rectangle."
console.log("Area:", rectangle.calculateArea()); // "Area: 200"
shape1 = new Shape("rectangle")
shape1.describe()
shape1.calculateArea()