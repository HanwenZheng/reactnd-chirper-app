import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "../components/Tweet";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweets.map((id) => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => {
  return {
    tweets: Object.keys(tweets).sort((a, b) => {
      return tweets[b].timestamp - tweets[a].timestamp;
    }),
  };
};

export default connect(mapStateToProps)(Dashboard);
