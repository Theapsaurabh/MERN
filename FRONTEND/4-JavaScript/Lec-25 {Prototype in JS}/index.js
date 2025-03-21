// Prototype in JavaScript---->


// Class Revision ----------------- -> blueprint

// class User{
// constructor(name){
// this.name=name;
// }
// printName(){
//     console.log(this.name)
//     } // --> Member function.
// }
// let n= new User("Saurabh");
// console.log(n);
// console.log(n.printName());


// ------------------PROTOTYPE----------------->
 // Prototype-> prototype are the mechanics by which JS object inherit features/properties 
 // from one another.

 let x= {}
 x.__proto__.print= function (){
    console.log("from object proto")
 }
 
 console.log(x.__proto__)
