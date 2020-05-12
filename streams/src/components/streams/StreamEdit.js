import React from "react";
import { connect } from "react-redux";

const StreamEdit = (props) => {
  console.log(props);
  return <div> StreamEdit</div>;
};

const mapStateToProps = (state, props) => {
  return { stream: state.streams[props.match.params.id] };
};

export default connect(mapStateToProps)(StreamEdit);
