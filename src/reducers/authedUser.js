import * as Actions from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case Actions.SET_AUTHED_USER:
      return {
        ...state,
        authedUser: action.id,
      };
    default:
      return state;
  }
};
