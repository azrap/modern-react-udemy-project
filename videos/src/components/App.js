import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

require("dotenv").config();

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  //   once the search term has been submitted do this:
  onTermSubmit = async term => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log("fro the app", video);
  };

  render() {
    return (
      // the className below gives a margin to the search bar
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
