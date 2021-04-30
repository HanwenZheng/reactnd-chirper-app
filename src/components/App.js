import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBarContainer from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { handleInitialData } from "../actions";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetDetail from "./TweetDetail";
import Nav from "./Nav";
import { Scrollbars } from "react-custom-scrollbars-2";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Scrollbars
            autoHeight
            autoHeightMax="100vh"
            autoHide
            autoHideTimeout={500}
            autoHideDuration={500}
          >
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
          </Scrollbars>
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
