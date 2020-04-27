import React from "react";
require("dotenv").config();

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_STREAMS_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          // get the auth object from the google api
          this.auth = window.gapi.auth2.getAuthInstance();

          //below we set/display the initial state of the user after initializing the authentication library:
          this.onAuthChange();

          //.listen gets invoked anytime the authentication status changes from sign in to out etc. and executes whatever you put inside it.
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // set the state after a user logs in/out.
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know of if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
