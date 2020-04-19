import React, { useState, useEffect } from "react";

export default function AddSub(){
  const [count, setCount] = useState(0);

  const handleCrementer = incrementer => {
    setCount(count + incrementer)   
  }
  
  return (
    <div>
      <hr />
      <h2>{count}</h2>
      <button onClick={() => handleCrementer(1)}>Add</button>
      <button
        onClick={count > 0 ? () => handleCrementer(-1) : null}
      >
        Sub
      </button>
    </div>
  ); 
}