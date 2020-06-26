import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Die from "./Die";

function App() {
  return (
    <div className="App">
      <Die face="five" />
      <Die face="one" />
      <Die face="two" />
    </div>
  );
}

export default App;
