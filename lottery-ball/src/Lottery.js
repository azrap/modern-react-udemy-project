import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  static defaultProps = {
    title: "lotto",
    maxBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) }; //empty array
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
    Math.floor(Math.random() * this.props.maxNum);
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
