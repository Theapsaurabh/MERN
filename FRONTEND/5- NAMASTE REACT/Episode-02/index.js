import React from "react";
import ReactDOM from "react-dom/client";

// neasted element 

/* <div id="parent">
    <div id="child">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
        <h3>i am h3 tag</h3>
        <h4>i am h4 tag</h4>

    </div>
</div> */


const heading= React.createElement("div", {id:"parent"}, 
  React.createElement("div", {id:"child"}, 
      [
      React.createElement("h1", {}, "i am h1 tag"),
      React.createElement("h2", {}, "i am h2 tag"),
        React.createElement("h3", {}, "i am h3 tag"),
       React.createElement("h4", {}, "i am h4 tag")
         ]

  )
)
const root=  ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
 
root.render(heading);










//ReactElement(object)=> HTML(Browser Understand)

// JSX