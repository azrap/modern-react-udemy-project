import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      {/* e.stopPropogation prevents the outer div (i.e the page w the on click history.push('/') that dismisses modal) from propogating to inner div (i.e dismiss on clicking the Modal) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure you want to delete stream?</div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
      {/* // you need the below + to hook it up to index.html // also need to add{" "} */}
      {/* <div id="modal"></div> under the root in index.html */}
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
