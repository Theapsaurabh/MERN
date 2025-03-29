
// Episode-05 Let's get Hooked -> 29-03-2025

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";







    
// not using key (not acceptable) << index as a key (bad practice ) <<< unique ID (best practice).




const AppLatout= ()=>{
    return (
        <div className="app">
          <Header></Header>
          <Body></Body>

        </div>
    )
};

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLatout></AppLatout>)