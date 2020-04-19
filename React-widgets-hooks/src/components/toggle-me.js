import React, { Component } from "react";

export default class ToggleMe extends Component {
  constructor() {
    super();

    this.state = {
      toggleWord: "Edwin"
    };
  }

  handleToggleMe = word => {
    this.setState({
      toggleWord: word
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h2>{this.state.toggleWord}</h2>
        <button
          onClick={
            this.state.toggleWord === "Edwin"
              ? () => this.handleToggleMe("Jared")
              : () => this.handleToggleMe("Edwin")
          }
        >
          Toggle Me
        </button>
      </div>
    );
  }
}
