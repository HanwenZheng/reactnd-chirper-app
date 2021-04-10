import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions";
import Dashboard from "../views/Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return <div>{this.props.authedUser && <Dashboard />}</div>;
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
