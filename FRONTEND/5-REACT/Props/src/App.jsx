
import { useState } from 'react';
import './App.css'
import Button from './components/Button';


function App() {
  const [count,setcount]= useState(0);
  function increase(){
    setcount(count+1);
  }
  

  return (
    <div>
<Button handle={increase} text="click me"> {count}</Button>

      {/* <Card name="Saurabh Pandey">
        <h1>Be a good human being</h1>
        <p>triying to be consistent </p>
        <p>i want to do mastery in this</p>
        </Card> */}

    </div>
    
  )
}

export default App
