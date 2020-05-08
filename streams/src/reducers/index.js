import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import streamReducer from "./streamsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  streams: streamReducer,
});
