// Callback Hell -----> Course --> HW

function searchFood(item, cb1) {
    setTimeout(function timer1() {
        let data = `list of ${item}`;
        cb1(item, data); // Pass both item and data to the next step
    }, 3000);
}

function orderFood(item, cb2) {
    console.log("Select", item);
    setTimeout(function timer2() {
        let id = Math.floor(Math.random() * 999999);
        console.log("Order created successfully with ID no.", id);
        cb2(id);
    }, 4000);
}

function payment(item, id, cb3) {
    console.log(`Payment starting for ${item} with ID no. ${id}`);
    setTimeout(function timer3() {
        let status = true;
        cb3(status);
    }, 6000);
}

// Execution starts here
searchFood("pizza", function fun1(item, data) {
    console.log(data);
    orderFood(item, function fun2(orderId) {
        console.log("Order ID:", orderId);
        payment(item, orderId, function fun3(response) {
            console.log(`Payment successful: ${response}`);
        });
    });
});