// const heading= React.createElement("h1", {id:"heading"}, "Hello world from React!");
   
// const root=  ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);
   
// root.render(heading);


// neasted element 

/* <div id="parent">
    <div id="child">
        <h1>i am h1 tag</h1>
        <h1>i am h1 tag</h1>
        <h1>i am h1 tag</h1>
        <h1>i am h1 tag</h1>

    </div>
</div> */


const head= React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        [React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")]

    )
)
const root=  ReactDOM.createRoot(document.getElementById("root"));

//console.log(heading);
   
root.render(head);










//ReactElement(object)=> HTML(Browser Understand)

// JSX

