import React, { Component } from "react";

class Button extends Component {
  state = { number: 1, isSeven: false };

  handleClick = (e) => {
    const number = Math.ceil(Math.random() * 10);

    this.setState({ number: number });
    if (number === 7) {
      this.setState({ isSeven: true });
    }
  };

  render() {
    const { number } = this.state;

    return (
      <div>
        <h1>Number is: {number}</h1>
        <h1>
          {this.state.isSeven ? (
            "YOU WIN!!"
          ) : (
            <button onClick={this.handleClick}> Random Number</button>
          )}
        </h1>
        <div></div>
      </div>
    );
  }
}

export default Button;
