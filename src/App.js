import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const store = useSelector((state) => state); 
  const dispatch=useDispatch();
  const increment = () => {
    //  when ever these dispatch action happens , store(reducer) will get these action and on more things also happen that is
    //  redux saga comes into play , that in counter.saga incrementCount() will be invoke then it will call the incrementCountCallbackfn 
    // then incrementCountCallbackfn w ill make tha api call and get the data and dispatch te data to store with type : ADD then store will
    // invoke again and store  data will get updated and all the other which are using the state will get the updated value
    dispatch({type:"ADD_INVOKER"})
  };
  const decrement = () => {
    //  same increment explanation
    dispatch({type:"SUB_INVOKER"})
  }; 
  const zeroHandler=()=>{ 
    //  same increment explanation
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
