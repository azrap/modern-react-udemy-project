import React from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const onDismiss = () => history.push("/");

  const actions = (
    <React.Fragment>
      <button className="ui button negative"> Delete</button>
      <button onClick={onDismiss} className="ui button">
        Cancel
      </button>
    </React.Fragment>
  );

  return (
    <div>
      Delete Stream
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={onDismiss}
      />
    </div>
  );
};

export default StreamDelete;
