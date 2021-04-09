import * as Actions from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case Actions.RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
};
