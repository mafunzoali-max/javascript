function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

const user = { name: "Alice", age: 25, country: "USA" };
greet(user);
// Output: Hello, Alice. You are 25 years old.
