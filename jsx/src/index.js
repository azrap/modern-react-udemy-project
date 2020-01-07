//Import React and ReactDOm libraries
import React from "react";
import ReactDOM from "react-dom";

// Create react component
const App = () => {
  return <div> Hi there! </div>;
};

// Take the react component and show it on screen

ReactDOM.render(<App />, document.querySelector("#root")); //this is a reference to the div id=root in the index.html file
