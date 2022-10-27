import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.SearchBar(this.state.term);
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
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* <input type="text" onChange={(event) => console.log(event.target.value)} /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
