class Animal {
  makeSound() {
    throw new Error('makeSound() must be implemented by subclasses');
  }
}

class Dog extends Animal {
  makeSound() {
    return 'Woof!';
  }
}

class Cat extends Animal {
  makeSound() {
    return 'Meow!';
  }
}

class Bird extends Animal {
  makeSound() {
    return 'Chirp!';
  }
}

// Usage
const dog = new Dog();
console.log(dog.makeSound()); // Output: Woof!

const cat = new Cat();
console.log(cat.makeSound()); // Output: Meow!

const bird = new Bird();
console.log(bird.makeSound()); // Output: Chirp!