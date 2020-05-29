import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //   contextType is nont foobar banana
  //doing this gives us this.context
  renderSubmit(value) {
    return value.language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {/* the consumer gets the context from the provider in app via the value */}
        <LanguageContext.Consumer>
          {/* consumer always needs a value*/}
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

//  can also do Button.contextType=LanguageContext and delete the static contextType line above

export default Button;
