import React from "react";
import { selectSong } from "../actions";
import Songlist from "./SongList";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <Songlist />
        </div>
      </div>
    </div>
  );
};

export default App;
