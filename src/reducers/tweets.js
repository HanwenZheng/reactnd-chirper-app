import * as Actions from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case Actions.RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };
    default:
      return state;
  }
};
