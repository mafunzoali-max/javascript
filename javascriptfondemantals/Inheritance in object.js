// Parent object (Animal)
const animal = {
    species: 'Unknown',
    speak: function() {
        console.log(`${this.species} makes a sound`);
    }
};

// Child object (Dog), inheriting from Animal
const dog = Object.create(animal);
dog.species = 'Dog';
dog.bark = function() {
    console.log('Woof Woof!');
};

// Using inherited and specific methods
dog.speak();  // Inherited from animal
dog.bark();   // Defined on dog
