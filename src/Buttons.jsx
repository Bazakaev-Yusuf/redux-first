import { useDispatch } from "react-redux"


function Buttons(){
   
   const dispatch = useDispatch();
   
   const plus = () => {
      dispatch({
         type: 'plus',
      })
   }
   const plusRndm = () => {
      dispatch({
         type: 'plusRndm',
         num: Math.floor(Math.random() * 100)
      })
   }
   const minus = () => {
      dispatch({
         type: 'minus'
      })
   }
   const minusRndm = () => {
      dispatch({
         type: 'minusRndm',
         num: Math.floor(Math.random() * 20)
      })
   }

   const reset = () => {
      dispatch({
         type: 'reset'
      })
   }
   return(
      <div className="btn-block">
         <button onClick={plus}>Plus</button>
         <button onClick={plusRndm}>Plus_Random</button>
         <button onClick={reset}>Reset</button>
         <button onClick={minusRndm}>Minus_Random</button>
         <button onClick={minus}>Minus</button>   
      </div>
   )
}
export default Buttons