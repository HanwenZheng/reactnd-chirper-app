import * as Actions from "../actions";

export default (state_tweet = {}, action) => {
  switch (action.type) {
    case Actions.RECEIVE_TWEETS:
      return {
        ...state_tweet,
        ...action.tweets,
      };
    case Actions.TOGGLE_TWEET:
      return {
        ...state_tweet,
        [action.id]: {
          ...state_tweet[action.id],
          likes:
            action.hasLiked === true
              ? state_tweet[action.id].likes.filter((uid) => {
                  return uid !== action.authedUser;
                })
              : state_tweet[action.id].likes.concat([action.authedUser]),
        },
      };
    case Actions.ADD_TWEET:
      const { tweet } = action;
      let tweetRepliedTo = {};
      if (tweet.replyingTo) {
        tweetRepliedTo = {
          [tweet.replyingTo]: {
            ...state_tweet[tweet.replyingTo],
            replies: state_tweet[tweet.replyingTo].replies.concat([tweet.id]),
          },
        };
      }
      return {
        ...state_tweet,
        [tweet.id]: tweet,
        ...tweetRepliedTo,
      };
    default:
      return state_tweet;
  }
};
