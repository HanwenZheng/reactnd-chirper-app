import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions";
import Dashboard from "../views/Dashboard";
import LoadingBarContainer from "react-redux-loading";
import NewTweet from "./NewTweet";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBarContainer />
        {this.props.authedUser && <NewTweet />}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
