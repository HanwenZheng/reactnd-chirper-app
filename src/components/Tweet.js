import React, { Component } from "react";
import { connect } from "react-redux";

class Tweet extends Component {
  render() {
    return (
      <div>
        <div className="tweet"></div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  return {
    authedUser,
    tweet:tweets[id],
    user: users[tweets[id].user]
  };
};

export default connect()(Tweet);
