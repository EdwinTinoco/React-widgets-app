import React, { Component } from "react";

export default class CurrentTime extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date()
    };
  }

  tick = () => {
    this.setState({
      time: new Date()
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <hr />
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
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
