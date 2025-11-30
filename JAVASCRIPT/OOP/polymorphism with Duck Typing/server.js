class Animal {
  speak() {
    console.log("Every animal speaks");
  }
}

class Dog extends Animal {
  eat() {
    console.log("Dog eats meat");
  }
}

class Cat extends Animal {
  eat() {
    console.log("Cat eats meat");
  }
}

class Car {
  speak() {
    console.log("Car speaks like mmmmmm");
  }
}

class Jet {
  fly() {
    console.log("Jet flies in the sky");
  }
}

// Create instances of the classes
const dog = new Dog();
const cat = new Cat();
const car = new Car();
const jet = new Jet();

// Group instances that have a `speak` method
const animals = [dog, cat, car];

// Call the `speak` method on each instance
for (let animal of animals) {
  animal.speak();
}

// If you want to include the Jet instance, you need to handle it differently
// since it doesn't have a `speak` method otherwise if you put Jet's instance in array of animal and try to call speak() on Jet's instance then the error occur since jet doesn't fullfill the requirement of have minimum of attributes and variablea for having a Animal class form  or face (jet.speak)
jet.fly(); // This will work