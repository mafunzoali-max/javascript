// Parent object
const parent = {
    property1: "Value1",
    method1: function() {
        console.log("Method from parent");
    }
};

// Child object inheriting from parent
const child = Object.create(parent); // child inherits from parent

// Using inherited properties and methods
console.log(child.property1);  // Inherited from parent
child.method1();  // Inherited method from parent
