import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBarContainer from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { handleInitialData } from "../actions";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetDetail from "./TweetDetail";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBarContainer style={{ position: "fixed" }} />
          <div className="container">
            <Nav />
            {this.props.loaded && (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/tweet/:id" component={TweetDetail} />
                <Route path="/new" component={NewTweet} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loaded: authedUser !== null,
  };
};

export default connect(mapStateToProps)(App);
