function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}
const person = { name: "Alice", age: 25 };
greet(person); // Output: Hello, Alice. You are 25 years old.
