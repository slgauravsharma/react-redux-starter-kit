import React, { Component } from "react";
import Demo from "./Demo";

class App extends Component {
  showResults = values => {
    console.log("values ", values);
  };
  render() {
    return (
      <div>
        <Demo onSubmit={this.showResults} />
      </div>
    );
  }
}

export default App;
