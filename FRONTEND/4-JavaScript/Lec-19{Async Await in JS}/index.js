// Async await  ->


// async function fun1(){
// return  ("hello")
// }

// let x=fun1()
// console.log(x)
// //console.log(typeof x) -> object


// ---------------------------------------------------------------------------->
// function pro(){
//     return new Promise(function pro1(res,rej){
//         res("sirr kaise hai")

//     });
// }

// async function fun1(){
//     let x= await pro()
//     console.log(x)
    
// }
// fun1().then((data)=>{
//     console.log(data);

// });

//-------------------------------------------------------------------------------->


// function pro(){
//     return new Promise(function pro1(res,rej){
//        setTimeout(()=>{
//         res("sirr kaise hai")
//        },10000);

//     });
// }

// async function fun1(){
//     let x= await pro()
//     return x;
    
// }
// let y= fun1();
// console.log(y)
// console.log("hgifbvhdb")

// ----------------------------------------------------------->

// function pro(){
//     return setTimeout(()=>{
//         console.log("hello");
//     },10000)
// }

// async function fun1(){
//     console.log("start");
//     let x= await pro();
//     console.log("end")
//     return x;
// }
// fun1()


// ----------------------------------------------------------------------->

