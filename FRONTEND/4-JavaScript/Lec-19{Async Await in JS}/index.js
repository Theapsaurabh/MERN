// let p= new Promise(function (resolve,reject){
//    resolve("promise resolved")
// })
// console.log(p)

// p.then((data)=>{
//     console.log(data)
// });


//-----------------lecture-40
// function searchFood(item, cb1) {
//     console.log("searching start for", item, ".....");
//     setTimeout(function timer1() {
//         let data = `list of ${item}`;
//         cb1(item, data);
//     }, 3000);
// }

// function orderFood(item, cb2) {
//     console.log("Select ", item);
//     setTimeout(function timer2() {
//         let id = Math.floor(Math.random() * 999999);
//         cb2(id);
//     }, 4000);
// }

// function payment(item, id, cb3) {
//     console.log(`payment starting for ${item} with id no.`, id);
//     setTimeout(function timer3() {
//         let status = true;
//         cb3(status);
//     }, 6000);
// }

// let result = searchFood("burger", function fun1(item, data) {
//     console.log(data);
//     orderFood(item, function fun2(orderId) {
//         console.log("order created successfully with id no.", orderId);
//         payment(item, orderId, function fun3(response) {
//             console.log("Payment successfull with status", response);
//         });
//     });
// });


//------------------ lecture-42 start---->
// function searchFood(item, cb1) {
//     console.log("searching start for", item, ".....");
//     setTimeout(function timer1() {
//         let data = `list of ${item}`;
//         cb1(item, data);
//     }, 3000);
// }

// searchFood("chole chawal ", function(item, data){
//     console.log(item);
//     console.log(data);
// })

// -------> converting into promise ---->

function searchFood(item){
    return new Promise(function fun1(res, rej){
        console.log("searching start for", item, ".....");
    setTimeout(function timer1() {
        let data = `list of ${item}`;
       res(data)
       
        },3000);
    })
}

let result= searchFood("pizza").then(function consumer1(item){
console.log(item);
});
console.log(result)