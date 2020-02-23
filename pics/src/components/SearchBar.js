import React from "react";

class SearchBar extends React.Component {
  // method gets called when someone changes the text in the bar
  onInputChange(event) {
    // changes everytime we type in the input
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>

            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
