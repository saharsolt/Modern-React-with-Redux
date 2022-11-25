import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";

class App extends React.Component {
  onTermSubmit = (term) => {
    //console.log(term);
    Youtube.get("/search", {
      params: {
        q: term,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
export default App;
