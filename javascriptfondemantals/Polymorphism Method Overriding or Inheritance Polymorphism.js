class Animal {
    speak() {
        console.log("Animal speaks");
    }
    eat() { 
      console.log("Any Animal eats grass or meat");}
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
    eat() {
      console.log("Dog eats meat");
    }
}
class Cow extends Animal {
   eat() {
     console.log("Cow eats grass");}
  speak() {
    console.log("nkooo");
  }
}

let myDog = new Dog();
myDog.speak(); // Output: Dog barks
myDog.eat();
let myCow = new Cow();
myCow.eat();
myCow.speak();
