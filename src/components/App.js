import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBarContainer from "react-redux-loading";

import { handleInitialData } from "../actions";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetDetail from "./TweetDetail";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBarContainer style={{ position: "fixed" }} />
        {this.props.authedUser && (
          <TweetDetail match={{ params: { id: "2mb6re13q842wu8n106bhk" } }} />
        )}
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
