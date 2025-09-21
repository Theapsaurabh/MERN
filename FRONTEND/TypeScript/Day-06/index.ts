// TODO: JAVASCRIPT Function : Invocation Decleration and & return type


function greet(name:string, id:number){
    console.log(`welcome, ${name} and your id id ${id}`);


}
greet("Saurabh",1);

// Arrow Function ->
const greeta= (name:string, id:number)=>{
    console.log(`welcome, ${name} and your id id ${id}`);
    

}
greeta("Saurabh",1);

// Function return type
function greetR(name:string, id:number):string{
 return (`welcome, ${name} and your id id ${id}`);


}
console.log(greetR("Saurabh",1))

