import { Home } from "./ContexAPI/Home"
import { BioProvider } from "./ContexAPI"
import { About } from "./ContexAPI/About"


const App = () => {
  return (
    <div>
      <BioProvider>
        <Home/>
        <About/>

      </BioProvider>
     
    </div>
  )
}

export default App
