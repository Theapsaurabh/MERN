
import { useState } from "react"

function App() {
  const [data, setData] = useState(4);
  function handleIncrease(){
    setData((preValue) => preValue +1)
  }
  return (<div>
    {data}
    <button onClick={handleIncrease}>increase</button>
  </div>
  );
}
export default App
