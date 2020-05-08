import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  // the Field below from redux-form will want to pass in a bunch of arguments into renderInput. We can put them under one obj and call it formProps

  renderError = (formProps) => {
    const { touched, error } = formProps;

    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = (formProps) => {
    const { input, label, meta } = formProps;
    const className = `field ${meta.error && meta.touched ? "error" : " "}`;

    return (
      <div className={className}>
        <label> {label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  // the below triggers the action creator 'createStream'
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    console.log(this.props);
    return (
      // handlesubmit is a redux-form function I htink?
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        autoComplete="off"
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// the below helps us validate the form inputs submitted by a user
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
    //only ran if the user did not enter a title
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
// reduxForm is a higher order function i.e. it returns a function, which then calls StreamCreate
const formWrapper = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapper);
