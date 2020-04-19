import React, { useState, useEffect } from "react";

export default function ColorWord(){
  const [color, setColor] = useState("black")  

  const handleChangeColor = color => {
    setColor(color)
  };
  
  return (
    <div>
      <hr />
      <h2 style={{ color: `${color}` }}>
        {color}
      </h2>
      <input id="color" type="text" placeholder="Type a color" />
      <button
        onClick={() =>
          handleChangeColor(document.getElementById("color").value)
        }
      >
        Change Color
      </button>
    </div>
  );  
}
