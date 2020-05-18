import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">Gibberish</div>
      {/* // you need the below + to hook it up to index.html // also need to add{" "} */}
      {/* <div id="modal"></div> under the root in index.html */}
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
