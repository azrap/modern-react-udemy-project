import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <div className="coin">
        <img className="coin-img" src={this.props.face} />
      </div>
    );
  }
}
export default Coin;
