import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export const receiveTweets = (tweets) => ({
  type: RECEIVE_TWEETS,
  tweets,
});

const addTweet = (tweet) => ({
  type: ADD_TWEET,
  tweet,
});

export const handleAddTweet = (text, replyingTo) => (dispatch, getState) => {
  const { authedUser } = getState();
  dispatch(showLoading());
  return saveTweet({
    text,
    replyingTo,
    author: authedUser,
  }).then((tweet) => {
    dispatch(addTweet(tweet));
    dispatch(hideLoading());
  });
};

const toggleTweet = ({ id, authedUser, hasLiked }) => ({
  type: TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked,
});

export const handleToggleTweet = (info) => (dispatch) => {
  dispatch(toggleTweet(info));
  return saveLikeToggle(info).catch((e) => {
    dispatch(toggleTweet(info));
  });
};
