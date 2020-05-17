import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  // the Field below from redux-form will want to pass in a bunch of arguments into renderInput. We can put them under one obj and call it formProps

  // the below triggers the action creator 'createStream'
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    console.log(this.props);
    return (
      // handlesubmit is a redux-form function I htink?
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// reduxForm is a higher order function i.e. it returns a function, which then calls StreamCreate

export default connect(null, { createStream })(StreamCreate);
