import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  // resource (foobar) has the current value of the state
  // setResource is the function to call when we want to update the state, in this case resource, + rerender component
  //useState is Function from react that uses the state
  // useState can be called as many times as we want and have additional lines similar to the one below
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
