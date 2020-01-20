import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this is the only time we do direct assignment to this.state. All other times will be with setState
    this.state = { lat: null, errorMessage: " " }; //we don't know what it is right now so we put null

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //to update the state object we called setState once we get the position
        this.setState({ lat: position.coords.latitude });
      },
      //when you call setState, you are only adding or changing, never removing or deleting. It leaves the rest of the things alone and only updates/adds what you tell it
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        Lattitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
