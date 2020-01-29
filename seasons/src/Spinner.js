import React from "react";

const Spinner = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.message}</div>
    </div>
  );
};
// set up default props for super reusable components like the spinner
Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
