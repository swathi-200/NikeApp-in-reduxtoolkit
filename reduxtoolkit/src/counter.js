import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "./store/store";

function Counter() {
  const counter=useSelector(state=>state.count)
  const dispatch=useDispatch();
  const  increment=()=>
  {
     dispatch(actions.increment())     
  }
  const  decrement=()=>
  {
     dispatch(actions.decrement())     
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
