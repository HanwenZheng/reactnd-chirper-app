import { saveLikeToggle } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

export const receiveTweets = (tweets) => ({
  type: RECEIVE_TWEETS,
  tweets,
});

const toggleTweet = ({ id, authedUser, hasLiked }) => ({
  type: TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked,
});

export const handleToggleTweet = (info) => {
  return (dispatch) => {
    dispatch(toggleTweet(info));
    return saveLikeToggle(info).catch((e) => {
      dispatch(toggleTweet(info));
    });
  };
};
