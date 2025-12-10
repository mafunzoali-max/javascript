const obj = {
  name: "Karenzo",
  greet: () => {
    console.log(this.name); // Arrow function does not bind its own 'this'
  },
};

obj.greet(); // Output: undefined
// correction of above code 
const objj= {
  name: "Karenzo",
  greet: function () {
    console.log(this.name);
  },
};

objj.greet(); // Output: "Karenzo"
