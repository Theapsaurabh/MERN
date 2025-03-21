 
 // CONDITIONAL STATEMENT
 // if else, if else if, nested else if,

 
 
 // 1-> else if


 age=5;
 if(age>=18){
    console.log("you can vote")
 }
else{
    console.log(" you can't vote")
}


// 2-> else if()

let age = 14;

if (age <= 10 ) {
  console.log("chota bacha ");
} else if (age >= 11 && age <= 17) {
  console.log("thoda bada bacha ");
} else if (age >= 18 && age <= 30) {
  console.log("Paisa kaamo");
} else {
  console.log("Maje lo ");
}

// let expression = '-'
const num4 = 10;
const num5 = 20;

switch(expression){
    case '+' :  console.log(num4 + num5);
                break;

    case '-' :  console.log(num4 - num5);
                break;
    default : console.log("choose correct operator ");
                break;

}

let num1 = 4 ;
let num2 = '4';
if(num1 == num2  && typeof(num1) == typeof(num2) ) {
    console.log("true")
}else{
    console.log("false")
}

for(let i = 1 ; i<= 10  ; i++){
    console.log(i * 15);
}

let j = 11;

while(j<= 10){
    console.log(j * 15);
    i++;
}

let i = 11;

do{
    console.log(i * 1);
    i++;
}while(i<= 10)

//ternary operator

console.log(4 < 9 ? "true" : "false");

for (let i = 0; i <= 10; i++) {
    
    if(i == 4){
        break;
    }
    console.log(i)
}


for (let i = 0; i <= 10; i++) {

    if(i == 4){
        continue;
    }
    console.log(i)
    
}


for(let i = 0 ; i<= 5 ; i++){
    str = ''
    for(let j = 0 ; j <= 5 ; j++){
        str += '*'
    }
    console.log(str)
}









// 3-> Switch Case









// 4-> Loop

for(let i=0; i<10; i++){
    console.log(i);
}







// 5-> ternary opeartor

