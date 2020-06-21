import React, { Component } from "react";
import logo from "./logo.svg";
import Rando from "./Rando";
import "./App.css";
import Button from "./Button";
import BrokenClick from "./BrokenClick";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />
        <BrokenClick />
      </div>
    );
  }
}

export default App;
