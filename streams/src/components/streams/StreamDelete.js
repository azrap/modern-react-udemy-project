import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  return (
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">Dete Stream</div>
        <div className="content">Are you sure you want to delete stream?</div>
      </div>
      StreamDelete
      <Modal />
    </div>
  );
};

export default StreamDelete;
