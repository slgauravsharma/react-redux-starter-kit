import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../actions/StudentActions";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.studentNameChangeAction("gaurav");
            this.props.history.push({ pathname: `/dashboard` });
          }}
        >
          Dashboard
        </button>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default connect(
  state => ({
    name: state.student.name
  }),
  Actions
)(withRouter(App));
