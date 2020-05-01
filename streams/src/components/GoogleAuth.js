import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
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

          //below we set/display the initial state of the user after initializing the authentication library. True/False
          this.onAuthChange(this.auth.isSignedIn.get());

          //.listen gets invoked anytime the authentication status changes from sign in to out etc. and executes whatever you put inside it.
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // set the state after a user logs in/out.
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const userId = this.auth.currentUser.get().getId();
      this.props.signIn(userId); //action creator
    } else {
      this.props.signOut();
    }
  };

  // the below two are used to sign in/out, then this.auth.isSignedIn.listen ^^ listens to the change and updates accordingly.
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          Sign Out
        </button>
      );
    } else {
      return (
        // don't include parenthesis bc if you do it will automatically execute on page load, vs on the click
        <button onClick={this.onSignInClick} className="ui red google button">
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

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
