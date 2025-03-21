// MAP, REDCUE, FOR EACH ---->

//(1)-> Rest And Spread Operator

// function sum(x,y,z){
//     let total= x+y+z;
//     return total
// }
//  ans= sum(3,4,5);
//  console.log(ans)



 // remaning value is grouping by rest in one value
//  The rest operator (...) in JavaScript allows you to represent an indefinite number of arguments as 
//  an array. It is useful when you want to work with a variable number of arguments in a function.




 // Rest operator example(1)--->
//  function sums(...num){
//     console.log(num)
//     let total= num[0]+num[1]+num[2];
//     return total

// // }
//  }
//  anss= sums(3,4,8);
//  console.log(anss);

//  // Rest operator example(2)--->
// function sums(...num) {
//     console.log(num); // num is an array of arguments
//     let total = num.reduce((acc, curr) => acc + curr, 0); // sum all elements in the array
//     return total;
// }

// let ansss = sums(3, 4, 8, 10); // you can pass any number of arguments
// console.log(ansss); // Output: 25

// spread operator ---> use to destructure
// The spread operator (...) in JavaScript allows an iterable such as an
//  array or object to be expanded in places where zero or more arguments (for function calls)
//   or elements (for array literals) are expected. It can also be used to spread an object into 
//   another object.

// Here is an example of how the spread operator can be used: 

// Example of Spread operator

// let objd={
//     title: "Lecture-30",
//     tags: ["Hello ji "],
//     description: "Hello Dosto"
// }

// let {title,tags,description}= objd;

// console.log(tags)


// Example of Spread operator with arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
console.log(arr2);

// Example of Spread operator with objects
// let obj = {
//     title: "Lecture-30",
//     tags: ["Hello ji "],
//     description: "Hello Dosto"
// };

// let newObj = { ...obj, author: "GitHub Copilot" };
// console.log(newObj);

// Destructuring using spread operator
// let { title, tags, description } = obj;
// console.log(title);

// // Example of Spread operator in function calls
// function sum(x, y, z) {
//     return x + y + z;
// }

// let numbers = [1, 2, 3];
// console.log(sum(...numbers)); // Output: 6




// function obj1(title, tags, description){
//     let tagsArray = tags.split(",")
//     console.log(tagsArray)

// }
// obj1(obj);
 




// for each--->

// let arr=[3,5,66,66,77,8,99]
// arr.forEach(function (val){
//     val +=5;
//     console.log(val)
// })



// what is callback function and what is return


// Arrow function

// let arr2=[300,5,66,66,77,8,99]
// const Arrow=(arr2)=>{
//     console.log(arr2)
// }
// Arrow(arr2);






// MAP--->  

// let arr3= [22,33,44,55,66,77];

// const newarr =arr3.map(function(val){
//     console.log(val);
//     return val;
// })


// console.log(newarr);


// Filter--->
// let arr4 = [99,88,77,66,55,44,33,22,11]
// const newar4= arr4.filter((val)=>{
// if(val>55){
//     return val;

// }
    

// })
// console.log(newar4);

// Difference between map and filter

// REDUCE--->

// let arr5= [88,77,44,33,44,55];
// const newarr5= arr5.reduce((accumulator, currentValue)=>{
//     accumulator= accumulator+currentValue;
//     return accumulator

// },0)

// console.log(newarr5);



// let players=[
//     {name: "Rinku", course:"B.tech", branch:"CSE"},
//     {name: "Rinku2", course:"B.tech", branch:"civil"},
//     {name: "Rinku3", course:"B.tech", branch:"ME"},
//     {name: "Rinku4", course:"B.tech", branch:"ECE"},
// ];


//console.log(typeof(players))-> Object




// const newplayers= players.filter((val)=>{

//    // console.log(val);

//    if(val.branch=== 'civil'){
//     return val;
//    }


// })
// console.log(newplayers)


















// function sum (a,...num) { //rest opertaor
//     let total  = a +  num[0] + num[1]
//     console.log(total)
// }

// sum(4,5,6);

// let obj = {
//     title:"Lecture 30",
//     tags:"lec30,rest,spread",
//     description:"helllo dosto"
// }

// function obj1({title, tags, description}){
//     // console.log(tags)
//     let tagsArray = tags.split(",")
//     console.log(tagsArray)
//     // ["lec30", "rest" , "spread"]
// }
// obj1(obj);

// let {title,...remaining} = obj
// console.log(remaining)

// let obj = {
//     title:"Lecture 30",
//     tags:"lec30,rest,spread",
//     description:"helllo dosto"
// }

// let arr = [4,5,67,42,5,334,345]
// let arr2 = [7,0,6,2,45,456]
// let newArray = [...arr] //spread
// console.log(newArray)

// let arr = [3,6,23,57,86]

// const hello = (arr) => console.log(arr)

// hello(arr)

// function print(val){
//  console.log(val)
// }

// arr.forEach((val) => console.log(val))

// function hello(arr) {
//     console.log(arr)
// }

// hello(arr)

// let arr = [3,6,23,57,86]

// const newArr = arr.map(function(val){
//      val *= 5;
//     return val
// })

// const newArr = arr.map((val) => val *= 5 )
// let arr = [3,6,23,57,86]
// const newArr = arr.filter((val) => val < 23)
// const newArr = arr.filter((val) => {
//     if(val <= 23){
//         return val
//     }
// })

// let arr = [3,6,23,57,86]
// let sum = 0;
// for (let i =0 ; i<arr.length ; i++){
//  sum +=arr[i] // sum = sum + arr[i] --> 0 + 3 = 3
// sum = sum + arr[i] --> 3 + 6 = 9
// sum = sum + arr[i] --> 9 + 23 = 32
// sum = sum + arr[i] --> 32  + 57 = 89
// sum = sum + arr[i] --> 89  + 86  = 175
// }
// console.log(sum)

// const newArr = arr.reduce((acc , cur) => acc += cur , 0)

// console.log(newArr)

// let students = [
//     { name: "Rinku", course: "Btech", branch: "cse" },
//     { name: "Rohit", course: "Btech", branch: "civil" },
//     { name: "Virat", course: "Btech", branch: "cse" },
//     { name: "Mukesh", course: "Btech", branch: "mechanical" },
//     { name: "Aksar", course: "Btech", branch: "civil" },
//   ];
  
//   const newArr = students.filter((val) => {
//       if(val.branch === 'civil'){
//           return val
//       }
//   }).map((val) => val.name)
  
  
//   console.log(newArr)
  
//   const obj = {
//       name1: "Nishant",
//       id1: 23134563,
//       course1: "B.tech",
//       Branch1: "Cse",
//       hosteller1: false,
//     };
  
//    const obj2 = {
//       name: "Nishant",
//       id: 23134563,
//       course: "B.tech",
//       Branch: "Cse",
//       hosteller: false,
//     };
  
//   const newObj = {...obj, ...obj2}
  
//   let objjj = {
//       name: "nishant",
//       name:"rahul"
//   }
//   console.log(objjj)
  
//   // console.log(newObj)