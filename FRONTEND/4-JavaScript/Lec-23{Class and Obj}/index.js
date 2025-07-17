// CLASS AND OBJECT IN JAVASCRIPT------>

// 1-> What is object.
//collection of prop and method

// let obj= {
//     name : "Saurabh",
//     email : "Nishant",

//    fun1(){
//       console.log("method:1")
//     },

// };
// console.log(obj.name) 

// ------------------------------- This Keyword -------------------------------------->

// this keyword shows current execution contex.

// let obj= {
//     name : "Saurabh",
//     email : "ampsaurabh88877@gmail.com",

//    fun1(){
//      console.log(obj.name)// -> print undefined.
//       console.log(this.name) //-> print name
//       console.log(this) // - > this refers to the current object
//     },
   

// };

// obj.fun1();
// console.log(obj)
// console.log(this) // ->  here it will show empty 


// -----------------------Constructor Function------------------------------------------------------------>
// function Product(name,price){
//     this.name= name;
//     this.price= price;
//     return this;

// }
// let p1=new Product("iphone-12 ", 123123123);
// let p2= new Product("Samsung ultra pro",5675756575 );
// console.log(p1);
// console.log(p2);





// what new keyword do- > JavaScript, please make me a brand new object using this 
// constructor function or class as a blueprint.”
 

// using new keyword with class


class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showDetails() {
    console.log(`${this.name} costs ₹${this.price}`);
  }
}

const p1 = new Product("iPhone 12", 80000); // ✅ using `new`
const p2 = new Product("Samsung Ultra", 90000);

p1.showDetails(); // iPhone 12 costs ₹80000
p2.showDetails(); // Samsung Ultra costs ₹90000


// ---------------------------------------------------->
// function Product(name,price){
//     this.name= name;
//     this.price= price;
//     return this;

// }
// let p1=new  Product("iphomr-12 ", 123123123);
// let p2=new Product("Samsung ultra pro",5675756575 );
// console.log(p1);
// console.log(p2);

// use of new keyword-->
// 4 steps
// 1-> new empty object gets created
// 2-> Object gets links to prototype of their constructor function
// 3-> Object gets bound as this
// 4-> return object


// ----------------------------------- CLASSES IN JS ------------------------------------------------>

// class Product{
//     category='electronics';
//     constructor(name,price){
//         this.name= name;
//         this.price=price;

//     }
//     ProductName(){
//         console.log(this.name);
//     }
// }
 
// let p1 =new  Product('Samsung', 2345667);
// console.log(p1)
// console.log(p1.ProductName())


// ------------------------------------------------------------------>



