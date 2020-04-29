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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });

          //.listen gets invoked anytime the authentication status changes from sign in to out etc. and executes whatever you put inside it.
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // set the state after a user logs in/out.
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          Sign Out
        </button>
      );
    } else {
      return (
        // don't include parenthesis bc if you do it will automatically execute on page load, vs on the click
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Google Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
