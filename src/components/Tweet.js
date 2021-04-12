import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { TiArrowBackOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";
import { handleToggleTweet } from "../actions";

class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
  };

  handleLike = (e) => {
    e.preventDefault();
    const { dispatch, tweet, authedUser } = this.props;
    dispatch(
      handleToggleTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authedUser,
      })
    );
  };

  render() {
    const { tweet } = this.props;
    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      id,
      parent,
      replyingTo,
    } = tweet;

    return (
      <div className={`tweet  ${replyingTo ? "tweet-reply" : null}`}>
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={(e) => this.toParent(e, parent.id)}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button
              className="heart-button"
              onClick={(e) => this.handleLike(e)}
            >
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweets[tweet.replyingTo];

  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser, parentTweet),
  };
};

export default connect(mapStateToProps)(Tweet);
