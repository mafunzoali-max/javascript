class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate area
  getArea() {
    return this.width * this.height;
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Creating an instance
const rect = new Rectangle(10, 5);

console.log(`Area: ${rect.getArea()}`);        // Output: Area: 50
console.log(`Perimeter: ${rect.getPerimeter()}`); // Output: Perimeter: 30
