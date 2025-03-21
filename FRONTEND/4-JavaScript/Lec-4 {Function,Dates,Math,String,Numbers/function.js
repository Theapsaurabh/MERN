// Function ---->
 
//block of code used to perform particular task
// reusable




const Std1_hindi= 50;
const Std1_english= 80;
const std1_math= 100;
let Std1_total= Std1_hindi+Std1_english+std1_math;

console.log(Std1_total/3);



const Std2_hindi= 50;
const Std2_english= 80;
const std2_math= 100;
let Std2_total= Std2_hindi+Std2_english+std2_math;

console.log(Std2_total/3);


const Std3_hindi= 50;
const Std3_english= 80;
const std3_math= 100;
let Std3_total= Std3_hindi+Std3_english+std3_math;

console.log(Std3_total/3);


//doing all this using function in just few lines of code--->

//  Keyword, FunctionName(Parameter)
    function totalSum(hindi, english, math, name){
    let sum= hindi+english+math;
    // without Return 
    console.log(name,sum);
}
    totalSum(50,60,70, "saurabh");
    totalSum(80,40,90, "Gaurav");
    totalSum(90,60,70, "Aman");
    totalSum(77,65,73, "Nitin"); // jab hum function call krte hai tab hum argument pass krte hai.





function totalSum(english, hindi, maths) {
  let sum = english + hindi + maths;
  return sum;

}

let amanTotal = totalSum(50, 70, 100);






function sayMyName(){
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

  // let result = number1 + number2
  // return result
  return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
  if(!username){
      console.log("PLease enter a username");
      return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));