import React, { useState, useEffect } from "react";

export default function PushAround(){
  const [positionContent, setPositionContent] = useState("center")  

  const handlePosition = position => {
    setPositionContent(position)
  };
 
  return (
    <div>
      <hr />
      <div className="p-tag-content"
        style={{ justifyContent: `${positionContent}` }}
      >
        <div>
          <h2>Push me around</h2>
        </div>
      </div>
      
      <button onClick={() => handlePosition("left")}>Left</button>
      <button onClick={() => handlePosition("center")}>Center</button>
      <button onClick={() => handlePosition("right")}>Right</button>
    </div>
  );
}
