class Person {
    #name; // Private field
    constructor(name,age,job) {
        this.#name = name;
        this.age = age;
        this.job=job;// Public field
    }
    // define private methods
    #work() {
      console.log(`${this.#name} works on ${this.job} at Turkiye company`)
    }
    #eat() {
      console.log(`${this.#name} love to eat fishs`);
    }
    publicMethod() {
      this.#eat()
      this.#work()

     
    }
    getName() {
        return this.#name; // Public method to access private data
    }
    setName(newName) {
        if (newName.length > 0)  {
            this.#name = newName;
        } //newName.length > 0 ensures that the newName string has at least one character.
 //If the condition is true, the code proceeds to update the private field.
        
        else {
            console.log("Name cannot be empty");
        }}
    
  
    
}
const Abdoul= new Person("Abdoul", 25,"student");
console.log(Abdoul.getName()); // Output: Abdoul
Abdoul.setName("Karenzo");
console.log(Abdoul.getName()); // Output: Karenzo
// console.log(person.#name); // Error: Private field '#name' must be declared
// if we try to access private data or method outside of class then the error occured for instance : console.log(Abdoul.#name) or Abdoul.#eat() orAbdoul.#work()

Abdoul.publicMethod()





