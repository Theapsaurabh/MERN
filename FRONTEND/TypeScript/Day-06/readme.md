# JavaScript / TypeScript Functions: Declaration, Invocation & Return Types

This note explains different ways to define functions in JavaScript/TypeScript, how to invoke them, and specifying return types.

---

## 1. Function Declaration & Invocation

A regular function can be declared using the `function` keyword.


```ts
function greet(name: string, id: number) {
    console.log(`Welcome, ${name} and your ID is ${id}`);
}

// Invocation
greet("Saurabh", 1);
Declaration: Using function keyword.

Invocation: Call the function by its name and pass required arguments.


ts
Copy code
const greeta = (name: string, id: number) => {
    console.log(`Welcome, ${name} and your ID is ${id}`);
}

// Invocation
greeta("Saurabh", 1);
Pros: Shorter syntax, especially useful in callbacks or inline functions.

Cons: this behaves differently compared to regular functions.

3. Function Return Type
In TypeScript, you can specify the return type of a function using :type.

ts
Copy code
function greetR(name: string, id: number): string {
    return `Welcome, ${name} and your ID is ${id}`;
}

console.log(greetR("Saurabh", 1));
:string ensures the function returns a string.

Benefits: Type safety and better code clarity.

Summary
Function Type	Syntax Example	Return Type	Notes
Regular Function	function greet(...) { ... }	Optional	Standard declaration, this behaves normally
Arrow Function	const greet = (...) => { ... }	Optional	Shorter syntax, lexical this
Function with Return Type	function greetR(...): string { ... }