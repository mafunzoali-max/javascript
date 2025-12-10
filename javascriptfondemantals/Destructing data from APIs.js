const response = {
    user: { name: "Alice", age: 25 },
    posts: [{ id: 1, title: "Hello World" }],
};

const { user: { name }, posts } = response;
console.log(name); // Output: Alice
console.log(posts); // Output: [{ id: 1, title: "Hello World" }]
