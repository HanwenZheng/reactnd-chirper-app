export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export const receiveTweets = (tweets) => ({
  type: RECEIVE_TWEETS,
  tweets,
});
