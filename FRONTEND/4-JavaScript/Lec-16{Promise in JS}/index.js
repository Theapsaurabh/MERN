// callback Hell----->>
// corse--> HW.

function searchFood(item,cb1){
    //console.log("item is", item)
    setTimeout(function timer1(){
     let data=`list of ${item}`;
     cb1(data);
   //  console.log(data); -> we want to return this.
    },3000)

   function orderFood(item, cb2){
    console.log("Select", item);
    setTimeout(function timer2(){
        let id=2334914;
        cb2(id);

    },4000)
   }

}
let result=searchFood("pizza", function fun1(item,data){
    console.log(data)
    orderFood(item, function fun2(orderId){
        console.log(orderId);
    })
});

