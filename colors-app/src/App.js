import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import ColorBox from "./ColorBox";

class App extends Component {
  render() {
    return (
      <div>
        {/* the below passes all key/object pairs inside seedColors[4] in as props eg colors, emoji, id etc */}
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
