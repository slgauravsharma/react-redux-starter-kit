import React, { Component } from "react";
import { connect } from "react-redux"; /* code change */
import * as Actions from "../redux/actions/StudentAction";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="App">
        <button
          onClick={() => {
            this.props.StudentAction("gaurav");
            this.props.history.push({ pathname: `/home` });
          }}
        >
          Show
        </button>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default connect(
  state => ({
    name: state.StudentReducer.name
  }),
  Actions
)(withRouter(App));
