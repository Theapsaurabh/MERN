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
        let id=Math.floor(Math.random()*999999);
        console.log("order created successfully with id no.", id);
        cb2(id);

    },4000)
   }

}

function payment(item,id,cb3){
    console.log(`Payment starting for  ${item} with id no ${id}`);
    setTimeout(function timer3(){
        let status= true;
        cb3(status);


    },6000)

}





let result=searchFood("pizza", function fun1(item,data){
    console.log(data)
    orderFood(item, function fun2(orderId){
        console.log(orderId);
        payment(item, orderId,function fun3(response){
            console.log(`payment suscessfull with : ${response}`);

        })
    })
});

