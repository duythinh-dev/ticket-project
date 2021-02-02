import { useConstants } from "../Constants/use.constant";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ?? {},
};
export function loginReduce(state = initialState, action) {
  switch (action.type) {
    case useConstants.LOGIN_REQUEST:
      return {};
    case useConstants.LOGIN_SUCCESS:
      return {
        loggingIn: true,
      };
    case useConstants.LOG_OUT:
      return {
        loggingIn: false,
      };
    case useConstants.LOGIN_FAILURE:
      return {};
    //   break;

    default:
      return state;
  }
}
