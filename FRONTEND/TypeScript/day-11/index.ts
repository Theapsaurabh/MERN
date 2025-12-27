// ! Typescript Objects
//* 1-> In Typescript, objects are a fundamental data structure that allows you to group related data and functionality together. Objects in Typescript can have properties (data) and methods (functions) associated with them. Here are some key concepts related to objects in Typescript:

// *2-> Object Initialization:

// Using object literals
let person: { name: string; age: number; greet: () => void } = {
    name: "John",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};

// Using interfaces to define object shapes
interface Car {
    make: string;
    model: string;
    year: number;
    start: () => void;
}

let myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {            
        console.log(`Starting my ${this.year} ${this.make} ${this.model}`);
    },
};

// Using classes to create objects
class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log(`${this.name} the ${this.species} makes a sound.`);
    }
}

let dog = new Animal("Buddy", "Dog");

// *3-> Accessing Object Properties and Methods:

// Accessing properties
console.log(person.name); // John
console.log(myCar.model); // Camry
console.log(dog.species); // Dog

// Calling methods
person.greet(); // Hello, my name is John and I am 30 years old.
myCar.start(); // Starting my 2020 Toyota Camry
dog.makeSound(); // Buddy the Dog makes a sound.

// *4-> Optional Properties and Readonly Properties:



