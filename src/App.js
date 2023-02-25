import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const store = useSelector((state) => state); 
  const dispatch=useDispatch();
  const increment = () => {
    dispatch({type:"ADD_INVOKER"})
  };
  const decrement = () => {
    dispatch({type:"SUB_INVOKER"})
  }; 
  const zeroHandler=()=>{ 
    dispatch({type:"ZERO_INVOKER"})
  }
  return (
    <div>
    <h1>welcome here incre/decre by 2 </h1>
      <h1> Count : {store.count} </h1>
      <button  onClick={increment}> + </button>
      <button onClick={zeroHandler}>0</button>
      <button onClick={decrement}> - </button>
    </div>
  );
}

export default App;
