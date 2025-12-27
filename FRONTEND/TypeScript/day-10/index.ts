// ! Typescript Array Method
//* 1-> In Typescript, arrays come with a variety of built-in methods that allow you to manipulate and interact with the array elements. Here are some commonly used array methods:

// *2-> Common Array Methods:

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
let numberss: number[] = [1, 2, 3];
numbers.push(4); // numbers is now [1, 2, 3, 4]

// pop(): Removes the last element from an array and returns that element. This method changes the length of the array.
let lastNumbers = numbers.pop(); // lastNumber is 4, numbers is now [1, 2, 3]

// shift(): Removes the first element from an array and returns that element. This method changes the length of the array.
let firstNumbers = numbers.shift(); // firstNumber is 1, numbers is now [2, 3]

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
numbers.unshift(0); // numbers is now [0, 2, 3] 

// iteration methods

// forEach(): Executes a provided function once for each array element.
numbers.forEach((num) => {
    console.log(num); // Logs each number in the array
});

// map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
let squaredNumbers = numbers.map((num) => num * num); // squaredNumbers is [0, 4, 9]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter((num) => num % 2 === 0); // evenNumbers is [0, 2]

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // sum is 5 (0 + 2 + 3)

// find(): Returns the value of the first element in the array that satisfies   the provided testing function. Otherwise, undefined is returned.
let foundNumber = numbers.find((num) => num > 2); // foundNumber is 3

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = numbers.indexOf(2); // index is 1

// includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let hasThree = numbers.includes(3); // hasThree is true

// slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let subArray = numbers.slice(0, 2); // subArray is [0, 2]

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
numbers.splice(1, 1, 5); // numbers is now [0, 5, 3]

// sort(): Sorts the elements of an array in place and returns the sorted array.
numbers.sort((a, b) => a - b); // numbers is now [0, 3, 5]

// reverse(): Reverses the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first.
numbers.reverse(); // numbers is now [5, 3, 0]

// join(): Joins all elements of an array into a string and returns this string.
let numberString = numbers.join(", "); // numberString is "5, 3, 0"

// concat(): Merges two or more arrays. This method does not change the existing arrays but instead returns a new array.
let moreNumbers = [6, 7];
let combinedArray = numbers.concat(moreNumbers); // combinedArray is [5, 3, 0, 6, 7]

// ! Example Usage:
let fruitss  : string[] = ["Apple", "Banana", "Orange"];
fruits.push("Mango"); // fruits is now ["Apple", "Banana", "Orange", "Mango"]
let citrusFruits = fruits.filter(fruit => fruit === "Orange"); // citrusFruits is ["Orange"]

console.log(fruitss);
console.log(citrusFruits);      

// ! Map and Filter Method
//* 1-> The map() and filter() methods are powerful array methods in JavaScript and TypeScript that allow you to transform and filter arrays in a concise and readable manner.

// *2-> map(): The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. It is often used for transforming data.        
let originalArray: number[] = [1, 2, 3, 4, 5];
let mappedArray = originalArray.map((num) => num * 2); // mappedArray is [2, 4, 6, 8, 10]

// *3-> filter(): The filter() method creates a new array with all elements that pass the test implemented by the provided function. It is commonly used for filtering data based on certain criteria.
let filteredArray = originalArray.filter((num) => num % 2 === 0); // filteredArray is [2, 4]

// ! Example Usage:
let names: string[] = ["Alice", "Bob", "Charlie", "David"];
let uppercasedNames = names.map(name => name.toUpperCase()); // uppercasedNames is ["ALICE", "BOB", "CHARLIE", "DAVID"]
let shortNames = names.filter(name => name.length <= 3); // shortNames is ["Bob"]

console.log(uppercasedNames);
console.log(shortNames);

