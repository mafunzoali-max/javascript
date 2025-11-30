class Person {
  constructor(name,age,maritalStatus) {
    this.name=name
    this.age=age
    this.maritalStatus=maritalStatus
    
  }
  // public method 
  eat() {
    console.log(`${this.name} will be ${this.maritalStatus} at the age of ${this.age}`);
  // get method for returning or finding age  
  }
  getAge() {
    return this.age;
  }
  // set method for supppsing or letting age 
  setAge(age) {
    if (age>40) {
      console.log("invalid age entered");
    }
    else {
      this.age=age
    }
  }

  
    }
person1=new Person("Saido",30,"married")
person2=new Person("Abdoul",27,"married")
person3=new Person("Tatu",55,"married")
person1.eat()
console.log(person1.getAge())
person1.setAge(20)
console.log(person1.getAge())
person1.setAge(55)
console.log(person1.getAge())
person1.eat()
person2.eat()
person3.eat()
person3.setAge(30)
person3.eat()
person2.setAge(58)
person3.eat()
person3.setAge(40)
console.log(`the ${person3.name} is ${person3.getAge()} year old`)
// NOT:YOU CAN MAKE OTHER GETTERS AND SETTERS METHODS FOR THE REMAINING PARAMETERS
