# modern-react-udemy-project

# react-redux boiler plate:

- npm install | install all dependencies
- npm install --save react-redux, axios, redux-thunk
- delete all the contents of src folder

BOILER PLATE CODE TO ADD:

- add index.js boiler plate | inside the src and set it up
  import React from "react";
  import ReactDOM from "react-dom";
  import { Provider } from "react-redux";
  import { createStore } from "redux";

  import App from "./components/App";

  import reducers from "./reducers";

  ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <App />
  </Provider>,
  document.querySelector("#root")
  );

- add semantic UI link to the index.html in public:

    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />

- add components/App.js boiler plate:

  import React from "react";

  const App = () => {
  return <div className="ui container">App </div>;
  };

  export default App;

- add reducers/index.js boiler plate:

  import { combineReducers } from "redux";
  export default combineReducers({ dummyducer: () => "dummy dummy" });
