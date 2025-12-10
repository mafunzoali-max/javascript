function greet() {
  console.log(this.name);
}

const person = { name: "Abdoul" };
greet.call(person); // Output: "Abdoul"

// explicity with blind

const greetPerson = greet.bind(person);
greetPerson(); // Output: "Abdoul"
