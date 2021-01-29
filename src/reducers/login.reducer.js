import { useConstants } from "../Constants/use.constant";

export function loginReduce(state = {}, action) {
  switch (action.type) {
    case useConstants.LOGIN_REQUEST:
      return {};
    case useConstants.LOGIN_SUCCESS:
      return {};
    case useConstants.LOGIN_FAILURE:
      return {};
    //   break;

    default:
      return state;
  }
}
