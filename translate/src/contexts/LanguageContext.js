import React from "react";

// the default string that goes in there (eg "english") is essentially like the initial state object in React

//Context is not foobar banana it's real

const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      // must use capital C or else react will think it's a vanilla html/jsx tag.
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

//

export default Context;
