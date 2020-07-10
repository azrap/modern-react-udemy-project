import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorPalette.css";

class ColorPalette extends Component {
  static defaultProps = {
    title: "colors",
    numBoxes: 18,
    allColors: ["purple", "green", "blue", "cyan", "pink", "lavender"],
  };
  constructor(props) {
    super(props);
  }

  render() {
    //generate an empty array of number of boxes
    const emptyArray = Array.from({ length: this.props.numBoxes });
    //fill it with boxes, using colors from the default props if no other colors are given
    const boxes = emptyArray.map(() => (
      <ColorBox allColors={this.props.allColors} />
    ));

    return <section className="color-palette">{boxes}</section>;
  }
}

export default ColorPalette;

//generate a default state of colors
// pass the color down from state into the boxes
// on click, state of the one box that is clicked changes
