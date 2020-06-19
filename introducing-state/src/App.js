import React, { Component } from "react";
import logo from "./logo.svg";
import Rando from "./Rando";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rando maxNum={7} />
      </div>
    );
  }
}

export default App;
