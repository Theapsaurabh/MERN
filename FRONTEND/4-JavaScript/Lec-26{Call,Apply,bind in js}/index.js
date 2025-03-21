// CALL, APPLY, BIND--->


// 1. CAll->
// let Student={
//   name: "Saurabh Pandey",
//   rollNo: 220097153009,
//   printinfo: function(){
//     console.log(`Name: ${this.name}, Roll No. : ${this.rollNo}`)
//   }
// };
// //console.log(Student);
// //Student.printinfo();

// let Student2={
//     name: "Arimardan Pandey",
//     rollNo: 9,
   
//   };
//   Student.printinfo.call(Student2);

//-------------------------------apply-------------------------------------------->

// let student3={
//     name: "Gaurav Pandey",
//     rollNo: 19,

// }
// function printinfo(branch,cgpa){
//     console.log(`Name: ${this.name}, Roll No. : ${this.rollNo}, Branch : ${branch}, CGPA : ${cgpa}`)

// }

// printinfo.apply(student3,["IT", "6.9"]);


// --------------------------------Bind------------------------------------------->
let student3={
    name: "Gaurav Pandey",
    rollNo: 19,

}
function printinfo(branch,cgpa){
    console.log(`Name: ${this.name}, Roll No. : ${this.rollNo}, Branch : ${branch}, CGPA : ${cgpa}`)

}

let newinfo=printinfo.bind(student3,["IT", "6.9"]);
newinfo()

