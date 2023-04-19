import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function Counter() {
  const counter=useSelector(state=>state.count)
  const dispatch=useDispatch();
  const  increment=()=>
  {
     dispatch({type:"inc"})     
  }
  const  decrement=()=>
  {
     dispatch({type:"dec"})     
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

    </div>
  );
}

export default Counter;
