//! Type inference  in Ts :
// Type inference is one of the most powerful features of TypeScript.
//* It means TypeScript automatically figures out (infers) the type without you explicitly writing it.

let myname="Saurabh"; // TypeScript infers the type as string
// myname=10; // Error: Type 'number' is not assignable to type 'string'

let age=25; // TypeScript infers the type as number
// age="twenty-five"; // Error: Type 'string' is not assignable to type 'number'

// TODO: what are some best peractices for using type inference effectively in TypeScript?
// 1. Use type inference for simple variables and constants.
// 2. Explicitly annotate types for complex structures like objects and arrays.
// 3. Leverage type inference in function return types when the return type is obvious.
// 4. Avoid using 'any' type to maintain type safety.
// 5. Use interfaces and type aliases to define complex types clearly.
// 6. Regularly refactor code to ensure type annotations remain accurate and relevant.
// 7. Use TypeScript's strict mode to catch potential type issues early.
// 8. Combine type inference with explicit types for better code readability and maintainability.

// ! here are two querstion for practice 
//* 1: declear a variable message and assign it with the value "Hello, TypeScript!" and let TypeScript infer its type.
//* 2: Create a function add that takes two parameters, a and b, and returns their sum. Let TypeScript infer the return type of the function.
