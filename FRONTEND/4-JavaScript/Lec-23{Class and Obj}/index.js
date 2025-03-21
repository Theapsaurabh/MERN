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
//      //console.log(name) -> print undefined.
//       //console.log(this.name) -> print name
//       console.log(this)
//     },
   

// };

// obj.fun1();
// console.log(obj)
// console.log(this)


// -----------------------Constructor Function------------------------------------------------------------>
// function Product(name,price){
//     this.name= name;
//     this.price= price;
//     return this;

// }
// let p1= Product("iphomr-12 ", 123123123);
// let p2= Product("Samsung ultra pro",5675756575 );
// console.log(p1);
// console.log(p2);

// ------------------------------------->
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

class Product{
    category='electronics';
    constructor(name,price){
        this.name= name;
        this.price=price;

    }
    ProductName(){
        console.log(this.name);
    }
}
 
let p1 =new  Product('Samsung', 2345667);
console.log(p1)
console.log(p1.ProductName())


// ------------------------------------------------------------------>



