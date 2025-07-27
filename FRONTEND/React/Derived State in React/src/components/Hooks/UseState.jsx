import { useState } from "react"

 export const UseState = () => {
    const[state, setState]= useState(0)
    const Increment= ()=>{
        setState(state+1);
    }
  return (
    <>
      <h1>{state}</h1>
      <button onClick={Increment}>Increment</button>
    </>
  )
}

export default UseState
