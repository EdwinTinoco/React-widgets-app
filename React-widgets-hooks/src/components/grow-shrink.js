import React, { useState, useEffect } from "react";

export default function GrowShrink(){
  const [count, setCount] = useState(20)  

  const handleGrowShrink = incrementer => {
    setCount(count + incrementer)
  };
 
  return (
    <div>
      <hr />
      <h2 style={{ fontSize: `${count}px` }}>
        {count}px
      </h2>
      <button onClick={() => handleGrowShrink(3)}>Grow</button>
      <button onClick={() => handleGrowShrink(-3)}>Shrink</button>
    </div>
  );
}
