import React from "react";
import ReactDOM from "react-dom/client";
// JSX-> react Element
const jsxheading= (<h1 className="head" tabIndex="5">
  Hii Saurabh Using JSX in React 🚀 
  </h1>);


// React Components->
// /*
// 1-> class based component
// 2-> functional based component
// /*

const Title=()=>(<h1 className="head" tabIndex="5">
  Hello Title Component 🚀
</h1>)
  

// 2-> functional based component
const Heading= ()=>{
  return <h1>Hello this is functional Component</h1>
};

const number=1000;


 // component composition->
const Headings= ()=><div id="container">
  {number+100}
  {jsxheading}
  <Title></Title> 
  <h1>this is also functional Component same a previous one</h1>

</div> 

const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Heading/>)
root.render(<Headings></Headings>)



