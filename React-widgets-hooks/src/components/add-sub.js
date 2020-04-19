import React, { Component } from "react";

export default class AddSub extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  handleCrementer = incrementer => {
    this.setState({
      count: this.state.count + incrementer
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h2>{this.state.count}</h2>
        <button onClick={() => this.handleCrementer(1)}>Add</button>
        <button
          onClick={this.state.count > 0 ? () => this.handleCrementer(-1) : null}
        >
          Sub
        </button>
      </div>
    );
  }
}