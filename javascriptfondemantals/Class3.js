class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Dog class inherits from Animal
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const animal = new Animal("Some Animal");
const dog = new Dog("Buddy");

animal.speak(); // Output: Some Animal makes a noise.
dog.speak();    // Output: Buddy barks.
