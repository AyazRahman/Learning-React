import React, { Component } from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (!this.state.lat && !this.state.errorMessage)
      return <Spinner msg="Getting Location..." />;
    else if (this.state.lat)
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    else return <div>Error: {this.state.errorMessage} </div>;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
