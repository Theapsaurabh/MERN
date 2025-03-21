// Callback->
// function hello(para){
//     console.log("inside hello")
//     para()

// }
// function cb(){
//     console.log("inside callback")
// }
// hello(cb)

// 2--> 
// function hello(text, para){
//     console.log("inside hello")
//     para(text);
// }

// hello("Hello", function cb(data){
//     console.log("inside callback", data)
// })


// CLOSURE--->

// 1--->
// function fun1(){
//     function fun2(){
//         console.log("Hello")
//     }
//      return fun2
// }

// let res= fun1();
// res();
// console.log(res)

// 2--->

// function fun1(text){
//     function fun2(){
//         console.log(text)
//     }
//      return fun2
// }

// let res= fun1("from fun 1");
// res();


// 3---->




//   SET-INTERVAL------->

// setInterval(()=>{
//     console.log("Hello");

// },1000)






// function colorChange(){
//     const body= document.getElementsByTagName("body")
// let colorString='0123456789abcdef'
// let color= "";
// for(let i=0; i<6; i++){
//     let randNum= Math.floor(Math.random()*colorString.length)
//     color= color+colorString[randNum]
    
// }
//     body[0].style.backgroundColor=`#${color}`;

// }
// setInterval(colorChange,1000);



// SET-TIMEOUT------->

// exp 1-->
// setTimeout(function (){
//     console.log("set Timeout me ek interval baad task hoke khatam ho jayega");
// },3000)


// exp 2-->
// console.log("step-1")
// setTimeout(() => {
//     console.log("step-2")
    
// }, 1000);
// console.log("step-3");






// exp 3--->
// console.log("hello-1")
// console.log("hello-2")
// console.log("hello-3")


// setTimeout(() => {
//     for(let i=0; i<10000000000; i++){
//         console.log("inside timeout");

//     }
    
// }, 1000);  
// console.log("hello-4")

// exp 4--->
// function fun1(){
//     setTimeout(function hello(){
//         console.log("Saurabh Pandey");
//     },1000)
// }

// fun1()



// exp 5--> Most Important
// function fun1(){
//     for(var i=0; i<10; i++){
//         setTimeout(function hello(){
//             console.log(i);

//         }, 1000)
//     }
// }
// fun1();


// exp 6--->

// function fun1(){
// for(var i=0; i<5; i++){
//     function inner(i){
//         setTimeout(function hello(){
//             console.log(i);
//         },i*1000);
//     }
//     inner(i);
// }
// }

// fun1()

// Browser vs Node--->

// Event- Loop----->
// types of Queue in JS---> 1- microtask(high-priority) promise, fetch 2- macrotask 



//exp 7--->

// console.log("starting");
// setTimeout(function hello(){
//     console.log("set-timeout-1")
// },5000);
// setTimeout(function hello(){
//     console.log("set-timeout-2")
// },3000);

// setTimeout(function hello(){
//     console.log("set-timeout-3")
// });

// console.log("ending")


