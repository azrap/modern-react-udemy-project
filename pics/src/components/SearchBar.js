import React from "react";

class SearchBar extends React.Component {
  // method gets called when someone changes the text in the bar
  // onInputChange(event) {
  //   // changes everytime we type in the input
  //   console.log(event.target.value);
  // }
  state = { term: "Search Term Here!" };

  // if you use arrow function, it automatically makes sure this.state automatically binds to the component in the function (Search Bar )
  onFormSubmit = event => {
    // keeps browser from automatically refreshing page on for submit
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>

            <input
              type="text"
              value={this.state.term}
              // update state. term will get set to whatever you type in
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
