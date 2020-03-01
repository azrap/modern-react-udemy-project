import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // if we know results will be an array, should default to empty array
  state = { images: [] };
  onSearchSubmit = async term => {
    //   unsplash is the api end point we created in api/unsplash.js
    const response = await unsplash.get("/search/photos", {
      // what we
      params: { query: term }
      //   what we pass in the header
    });

    // console.log(response);

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* when passing functions as prop (eg onSubmit), you can call them anything */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found:{this.state.images.length} images */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
