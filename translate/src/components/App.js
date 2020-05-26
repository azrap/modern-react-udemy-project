import React from "react";
import UserCreate from "./UserCreate";

export default class App extends React.Component {
  // default state at the start
  state = { language: "dutch" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}
