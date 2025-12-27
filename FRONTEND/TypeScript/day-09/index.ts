// ! Typescript Array initilization and access\
//* 1-> In Typescript, you can initialize and access arrays using various methods. Here are some common ways to do so:

// *2-> Array Initialization:

// Using square brackets []
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Orange"];

// Using Array generic type
let mixedArray: Array<number | string> = [1, "Two", 3, "Four"];

// Using the Array constructor
let emptyArray: number[] = new Array();
let predefinedSizeArray: number[] = new Array(5); // Creates an array of length 5 with undefined values

// *3-> Accessing Array Elements:

// Accessing elements by index
let firstNumber = numbers[0]; // 1
let secondFruit = fruits[1]; // "Banana"

// Modifying elements by index
numbers[2] = 10; // numbers is now [1, 2, 10, 4, 5]
fruits[0] = "Mango"; // fruits is now ["Mango", "Banana", "Orange"]

// Accessing the length of the array
let numbersLength = numbers.length; // 5

// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// Using array methods
numbers.push(6); // Adds 6 to the end of the array
let lastNumber = numbers.pop(); // Removes and returns the last element (6)
let indexOfBanana = fruits.indexOf("Banana"); // 1

