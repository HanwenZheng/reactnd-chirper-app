import * as Actions from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case Actions.SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
};
