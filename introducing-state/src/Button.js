import React, { Component } from "react";

class Button extends Component {
  render() {
    return <button onClick={() => alert("CLICKED!")}>Click me!</button>;
  }
}

export default Button;
