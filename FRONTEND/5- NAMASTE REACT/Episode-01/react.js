
/*
What is React-> React is a Javascript library for building user interface
what is library -> 

what is React-DOM -> the core of react , this react library is helpful for DOM manipulation



// CDN REACT ?? what is CDN->




*/


// ReactElement(object) => HTML(browers understand).


// const heading= React.createElement("h1", {id:"heading"}, "Hello world from React!"); // heading is not a tag it is object
   
// const root=  ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading); // it will return object in console
   
// root.render(heading); // this render is responsibe for converting  h1 from object to h1 tag and put it into HTML





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

