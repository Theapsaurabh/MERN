import { useState } from "react";


function App() {

 let [data, setData]=useState(0)



 //let count =0;
  function increaseVal(){
   // count++;
   setData((data)=> data+1)

  }

  function decreaseVal(){
   // count--;
   setData((data)=> data-1)

  }
  
  
  return (
    <div>
<h1>Counter</h1>
<button onClick={increaseVal}>Increase</button>
<h2>{data}</h2>
<button onClick={decreaseVal}>Decrease</button>

    </div>
  )
}

export default App
