import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      // the className below gives a margin to the search bar
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
