import React, { Component } from "react";

export default class PushAround extends Component {
  constructor() {
    super();

    this.state = {
      positionContent: "center"
    };
  }

  handlePosition = position => {
    this.setState({
      positionContent: position
    });
  };

  render() {
    return (
      <div>
        <hr />
        <div className="p-tag-content"
          style={{ justifyContent: `${this.state.positionContent}` }}
        >
          <div>
            <h2>Push me around</h2>
          </div>
        </div>
        
        <button onClick={() => this.handlePosition("left")}>Left</button>
        <button onClick={() => this.handlePosition("center")}>Center</button>
        <button onClick={() => this.handlePosition("right")}>Right</button>
      </div>
    );
  }
}
