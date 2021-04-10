import { getInitialData } from "../utils/api";
import { setAuthUser, receiveUsers, receiveTweets } from ".";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = "alex_zheng";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
