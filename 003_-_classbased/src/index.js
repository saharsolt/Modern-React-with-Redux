import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    // This is the only time we do the direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //console.log(position);
        // We called setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        //console.error(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
