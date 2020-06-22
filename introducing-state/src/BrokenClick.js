import React, { Component } from "react";

class BrokenClick extends Component {
  state = { clicked: false };

  handleClick = (e) => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked!" : "Not Clicked"}</h1>
        <button onClick={this.handleClick}>Clicks</button>
      </div>
    );
  }
}

export default BrokenClick;
