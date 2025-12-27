// ! Optional and Default Parameters
//* 1-> Typescript allow you to define optional and default parameters in functions. This feature
//*  enhances the flexibility of function definitions and allows for more concise and readable code.

// *2 -> optional parameters are denoted by a question mark (?) after the parameter name.
// *and parameters are specified by providing a default value in the parameter declaration.
const saurabh=(name:string, id:number=1)=>{
    console.log(`welcome, ${name} and your id id ${id}`);
    

}
saurabh("Saurabh",1)