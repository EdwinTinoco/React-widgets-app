import React, { useState, useEffect } from "react";

export default function CurrentTime(){
  const [currentTime, setCurrentTime] = useState(new Date())
  const [intervalTime, setIntervalTime] = useState(0)

  const tick = () => {
    setCurrentTime(new Date())
  };

  useEffect(() => {
    setIntervalTime(setInterval(() => tick(), 1000))

    return function() {
      clearInterval(intervalTime);
    };
    
  }, [])

  console.log(intervalTime);
  
  
  return (
    <div>
      <hr />
      <h1>{currentTime.toLocaleTimeString()}</h1>
    </div>
  );
}

// handleTime = () => {
//   var currentTime = new Date();
//   var hrs = currentTime.getHours();
//   var min = currentTime.getMinutes();
//   var sec = currentTime.getSeconds();

//   var sufijo = "AM";
//   if (hrs > 12) {
//     hrs = hrs - 12;
//     sufijo = "PM";
//   }

//   if (min < 10) {
//     min = `0${min}`;
//   }
//   if (sec < 10) {
//     sec = `0${sec}`;
//   }

//   document.getElementById(
//     "clock"
//   ).innerHTML = `${hrs}:${min}:${sec} ${sufijo}`;

//   setTimeout(this.buildTime, 1000);
// };

// render() {
//   return (
//     <div>
//       <hr />
//       <h2 id="clock" onClick={this.handleTime}>
//         {moment().format("LTS")}
//       </h2>
//     </div>
//   );
// }
