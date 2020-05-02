import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  // the Field below from redux-form will want to pass in a bunch of arguments into renderInput. We can put them under one obj and call it formProps
  renderInput(formProps) {
    const { input, label } = formProps;
    return (
      <div className="field">
        <label> {label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    console.log(this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

// reduxForm is a higher order function i.e. it returns a function, which then calls StreamCreate
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
