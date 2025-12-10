// Class as a blueprint
class Car {
  constructor(brand, model, year) {
    this.brand = brand;   // Property
    this.model = model;   // Property
    this.year = year;     // Property
  }

  // Method
  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}

// Creating objects (instances) from the blueprint
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2022);

// Using the instances
car1.start(); // Output: Toyota Corolla is starting...
car2.start(); // Output: Honda Civic is starting...
