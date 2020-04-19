import React, { useState, useEffect } from "react";

export default function HideMe(){
  const [styleType, setStyleType] = useState("block")  

  const handleHideMe = blockNone => {
    setStyleType(blockNone)
  };
 
  return (
    <div>
      <hr />
      <h2 style={{ display: `${styleType}` }}>Hide Me</h2>
      <button
        onClick={
          styleType === "block"
            ? () => handleHideMe("none")
            : () => handleHideMe("block")
        }
      >
        Hide Me
      </button>
    </div>
  );
}
