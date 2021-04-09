import { getInitialData } from "../utils/api";
import { setAuthUser, receiveUsers, receiveTweets } from ".";

const AUTHED_ID = "alex_zheng";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTHED_ID));
    });
  };
}
