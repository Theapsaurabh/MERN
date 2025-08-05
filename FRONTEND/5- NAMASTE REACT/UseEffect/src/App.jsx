
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[count, setcount]= useState(0);
  const[total, settotal]= useState(0)
  //first --> side-effect operation
  
  // variation 1 : -> runs on every render
  // useEffect(() =>{
    
  //   console.log("runs on every render");
  // })


  
// variation 2: -> thats run only first render
// useEffect(() =>{
    
//   console.log("runs on only first render");
// },[])


// variation 3: -> thats run only first render
// useEffect(() =>{
    
//   console.log("runs everytime when count is change");
// },[count])

// variation 4:- multiple dependency
// useEffect(()=>{

// },[])

// variation 5: - let's add cleanup function

useEffect(() => {
  alert("count is updated")
  

  return () => {
    alert("count is unmounted from UI")
   
  }
}, [count])


 
function increase(){
  setcount(count+1);
  settotal(total+1);

 }

  return (
   <div>
    <button onClick={increase}> click me</button>
    <div>count is {count}</div>
   </div>
  )
}

export default App
