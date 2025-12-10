const obj = {
  name: "Abdoul",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet(); // Output: "Abdoul"

