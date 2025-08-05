import { Home } from "./ContexAPI/Home"
import { BioProvider } from "./ContexAPI"


const App = () => {
  return (
    <div>
      <BioProvider>
        <Home/>

      </BioProvider>
     
    </div>
  )
}

export default App
