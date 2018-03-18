import React from "react";
import { connect } from "react-redux";

const StudentDashboard = props => {
  return <div> {props.name ? `Awesome ${props.name}` : ""}</div>;
};

export default connect(state => ({
  name: state.student.name
}))(StudentDashboard);
