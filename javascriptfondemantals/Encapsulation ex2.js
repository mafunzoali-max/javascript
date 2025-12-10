class Person {
    #name; // Private field
    constructor(name, age) {
        this.#name = name;
        this.age = age; // Public field
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
        }
    }
}
const person = new Person("Abdoul", 25);
console.log(person.getName()); // Output: Abdoul
person.setName("Karenzo");
console.log(person.getName()); // Output: Karenzo
// console.log(person.#name); // Error: Private field '#name' must be declared
person.setName(66);
