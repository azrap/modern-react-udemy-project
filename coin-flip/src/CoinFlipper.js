import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = { face: "", countHead: 0, countTail: 0, countTotal: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  //a flipper that flips the coin
  flip() {
    //generates a 1 or a 0.
    const flip = Math.round(Math.random() * 1);

    let face;
    let countHead = this.state.countHead;
    let countTail = this.state.countTail;

    if (flip === 0) {
      face = "https://tinyurl.com/react-coin-heads-jpg";
      countHead += 1;
    } else {
      face = "https://tinyurl.com/react-coin-tails-jpg";
      countTail += 1;
    }
    //if 1, set the state to heads, else set it to tails.
    this.setState({
      face: face,
      countHead: countHead,
      countTail: countTail,
      countTotal: countHead + countTail,
    });

    //in the render, if state is heads, pass in the heads image, else pass in the tails image
    //
  }

  async handleClick() {
    this.flip();
  }

  render() {
    return (
      <section className="CoinFlipper">
        <h1> Let's flip coins!</h1>

        <Coin face={this.state.face} />
        <button onClick={this.handleClick}>Flip it!</button>
        <h3>
          {`Out of ${this.state.countTotal} flips, there have been ${this.state.countHead} heads, and ${this.state.countTail} tails.`}{" "}
        </h3>
      </section>
    );
  }
}

export default CoinFlipper;
