//Import React and ReactDOm libraries
import React from "react";
import ReactDOM from "react-dom";

// Create react component
const App = () => {
  const buttonText = { text: "Click me" };
  const labelText = "Enter name:";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on screen

ReactDOM.render(<App />, document.querySelector("#root")); //this is a reference to the div id=root in the index.html file
