import { useSelector } from "react-redux"
import Buttons from "./Buttons"

function App(){

   const counter = useSelector(state => state)

   return (
      <div className="app">
         {counter}
         <Buttons/>
      </div>
   )
}

export default App