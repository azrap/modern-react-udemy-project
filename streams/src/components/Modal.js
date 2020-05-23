import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      {/* e.stopPropogation prevents the outer div (i.e the page w the on click history.push('/') that dismisses modal) from propogating to inner div (i.e dismiss on clicking the Modal) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
      {/* // you need the below + to hook it up to index.html // also need to add{" "} */}
      {/* <div id="modal"></div> under the root in index.html */}
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
