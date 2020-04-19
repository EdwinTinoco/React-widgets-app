import React, { Component } from "react";

export default class GrowShrink extends Component {
  constructor() {
    super();

    this.state = {
      count: 20
    };
  }

  handleGrowShrink = incrementer => {
    this.setState({
      count: this.state.count + incrementer
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h2 style={{ fontSize: `${this.state.count}px` }}>
          {this.state.count}px
        </h2>
        <button onClick={() => this.handleGrowShrink(3)}>Grow</button>
        <button onClick={() => this.handleGrowShrink(-3)}>Shrink</button>
      </div>
    );
  }
}
