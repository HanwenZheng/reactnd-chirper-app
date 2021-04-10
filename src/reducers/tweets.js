import * as Actions from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case Actions.RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };
    case Actions.TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter((uid) => {
                  return uid !== action.authedUser;
                })
              : state[action.id].likes.concat([action.authedUser]),
        },
      };
    default:
      return state;
  }
};
