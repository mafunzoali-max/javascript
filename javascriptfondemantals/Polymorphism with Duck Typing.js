
class Animal {
  speak () {
    console.log("every animal speaks")
  }
}


class Dog extends Animal  { 
  eat() { console.log("Dog eats meat");}
}
class Cat extends Animal { 
  eat() { console.log("Cat eats meat");}
}
class Car {
  speak () {
    console.log("car speaks like mmmmmm")
  }
}
class Jet {
  fly() {
    console.log("jet flies in the sky")
  }
}
const animals=[Dog(),Cat(),Car(),Jet()];
const animals=new Animal

animals.speak()




