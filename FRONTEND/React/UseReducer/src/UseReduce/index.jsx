// counter app using use Reducer
import { useReducer } from "react";

  export const ReducerComp = () => {

   const reducer= (state, action)=>{
    if(action.type == "INCREMENT"){
        return state+1;
    }
    if(action.type == "DECREMENT"){
        return state-1;
    }
    if(action.type== "RESET"){
      return state=0;
    }


    }
    const [count, dispatch]= useReducer(reducer,0)
  return (
    <div>
     <div>
        <h1>
            {count}
        </h1>
        <button onClick={()=> dispatch({type: "INCREMENT"})}>Increment</button>
        <button onClick={()=> dispatch({type: "DECREMENT"})}>Decrement</button>
        <button onClick={()=> dispatch({type: "RESET"})}>Reset</button>
     </div>
    </div>
  )
}

 



// improved version of UseReducer->



const ReducerCompImproved = () => {
  const initialState ={
    count: 0,
    inc :2,
    dec:2,
  }

    const reducer= (state, action)=>{
    switch (action.type) {
      case "INCREMENT":
        return {...state,coun: state.count+1};
      case "DECREMENT":
        return {...state,coun: state.count-1};
      case "RESET":
        return {...state,coun: state.count=0};
        
    
      default:
        return state.count
       
    }


    }
    const [state, dispatch]= useReducer(reducer,initialState)
  return (
    <div>
     <div>
        <h1>
            {state.count}
        </h1>
        <button onClick={()=> dispatch({type: "INCREMENT"})}>Increment</button>
        <button onClick={()=> dispatch({type: "DECREMENT"})}>Decrement</button>
        <button onClick={()=> dispatch({type: "RESET"})}>Reset</button>
     </div>
    </div>
  )
}

export default ReducerCompImproved
