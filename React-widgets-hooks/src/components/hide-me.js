import React, { Component } from "react";

export default class HideMe extends Component {
  constructor() {
    super();

    this.state = {
      styleType: "block"
    };
  }

  handleHideMe = blockNone => {
    this.setState({
      styleType: blockNone
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h2 style={{ display: `${this.state.styleType}` }}>Hide Me</h2>
        <button
          onClick={
            this.state.styleType === "block"
              ? () => this.handleHideMe("none")
              : () => this.handleHideMe("block")
          }
        >
          Hide Me
        </button>
      </div>
    );
  }
}
