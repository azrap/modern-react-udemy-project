import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor's only job is to initialize our state

  // this is the only time we do direct assignment to this.state. All other times will be with setState

  // the below gets interpreted by babel to include the constructor etc.
  state = { lat: null, errorMessage: "" }; //we don't know what it is right now so we put null

  // this is used to get the data you need for the component to render:
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //to update the state object we call setState once we get the position

      position => this.setState({ lat: position.coords.latitude }),
      //when you call setState, you are only adding or changing, never removing or deleting. It leaves the rest of the things alone and only updates/adds what you tell it
      err => this.setState({ errorMessage: err.message })
    );
    console.log(this.state.lat);
  }

  // method: pull the content out of the return statement so it's more customizeable when you have multiple return statements
  renderContent() {
    if (!this.state.errorMessage && this.state.lat) {
      console.log("inside the lat statement");
      // <div>Lattitude: {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return <Spinner message="Please Accept Location Request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
