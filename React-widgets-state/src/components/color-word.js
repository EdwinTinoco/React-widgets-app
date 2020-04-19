import React, { Component } from "react";

export default class ColorWord extends Component {
  constructor() {
    super();

    this.state = {
      colorType: "black"
    };
  }

  handleChangeColor = color => {
    this.setState({ 
      colorType: color
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h2 style={{ color: `${this.state.colorType}` }}>
          {this.state.colorType}
        </h2>
        <input id="color" type="text" placeholder="Type a color" />
        <button
          onClick={() =>
            this.handleChangeColor(document.getElementById("color").value)
          }
        >
          Change Color
        </button>
      </div>
    );
  }
}
