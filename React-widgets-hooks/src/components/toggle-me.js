import React, { useState, useEffect } from "react";

export default function ToggleMe(){
  const [toggleWord, setToggleWord] = useState("Edwin")

  const handleToggleMe = word => {
    setToggleWord(word)
  };
 
  return (
    <div>
      <hr />
      <h2>{toggleWord}</h2>
      <button
        onClick={
          toggleWord === "Edwin"
            ? () => handleToggleMe("Jared")
            : () => handleToggleMe("Edwin")
        }
      >
        Toggle Me
      </button>
    </div>
  );
}
