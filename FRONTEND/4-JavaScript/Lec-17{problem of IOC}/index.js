// Promise---> it is object represent the eventual completion or
//  faliure a async  operaton. {more readable, and manageable}.

// 1-> state -> {pending, fullfiled, rejected};
// 2-> value/ Result/ Output -> {};

// pending state -> value is undefined;
// final state -> settled means either fullfiled or rejected return value();


//----------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------->

// console.log("start")
// const promis=  new Promise((resolve, reject)=> {
//     // console.log("inside promise:");
//    // return "hello"
// resolve("hello from resolve");
// });
// console.log("end")

// console.log(promis);


//-------------------------------------------->

// const promis2=  new Promise((resolve, reject)=> {
// //resolve("promise resolve");
// reject("promise rejected");
//   });
// promis2.then(function success(result){
//     console.log(result)

// }, function reject(err){
//     console.log(err)
// })

//------------------------------------------------------------------>


function isData(item){
    const promis2=  new Promise((resolve, reject)=> {
       
        resolve("promise rejected");
          });
          return promis2;
}

   let result= isData();

    result.then(function success(result){
        console.log(result)
    
    });