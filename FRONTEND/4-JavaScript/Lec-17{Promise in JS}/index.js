// Promise in JavaScript---->
// its a object represent eventual completion or failure of async operation

// 1. State {Pending -> initial State , (fulfill, Rejected) -> Final State }
// 2. Value {panding-> undefined, Final State-> Settled (either fulfilled or settled )}


// Settled -> ya to fulfillde ho gya promise ya reject ho gya

// CREATION OF PROMISE-> creation of promise is a sync function


// const promise1= new Promise(function fun1(resolve, reject){
//     //console.log("inside promise")
//     //resolve("on accepted")
//     reject("on rejected")
//     //console.log("heiiii");

// })
// promise1.then(function success(result){
//     console.log(result)

// }, function reject(err){
//     console.log(err)
// })

// console.log(promise1);

// -------------------------------------------------------------------------------------------------->>>>>

// function isData(item){
//     const promise2= new Promise(function fun2(resolve,reject){
//        if(item){
//         console.log("promise2 is resolved")
//        }else{
//         console.log("promise2 is rejected")
//        }
//     })
//     return promise2;

// }
// let result= isData(3);
// result.then(function succ(result){
//     console.log(result)
// })

// -------------------------------------------------------------------------------------------------->>>>>

// function isData(item){
//     const promise2= new Promise(function fun2(resolve,reject){
//        setTimeout(function timer1(){
//         if(item){
//             console.log("promise2 is resolved")
//            }else{
//             console.log("promise2 is rejected")
//            }
//        },4000)
//     });
//     return promise2;

// }
// let result= isData("kkkk");
// console.log(result)
// result.then(function succ(result){
//     console.log(result)
// })
// console.log("end")


// ------------------------------------------------------------------------------------------->

// function isData(item){
//     const promise1= new Promise(function fun1(resolve,reject){
//         if(item){
//          resolve("promise resolved");
//         }else{
//             reject("data is empty");
//         }
//     });
//     return promise1;
// }

// let result= isData("oo");
// setTimeout(function hello(){
//     console.log("set-timeout");
// },6000)

// result.then(function success(result){
//     console.log(result)
// })
// console.log("end");

// ---------------------------------------------------------------------------------------------------->

