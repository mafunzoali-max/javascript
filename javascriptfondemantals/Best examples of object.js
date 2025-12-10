const Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() {
        console.log("Car started");
    },
    owner: {
        name: "John",
        age: 35
    }
};

Car.year=2025 ;
console.log(Car.year) ;
console.log(Car.start) ;
console.log(Car.model) ;
Object.keys(Car)