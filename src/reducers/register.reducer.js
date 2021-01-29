import { useConstants } from "../Constants/use.constant";

export function registerReduce(state = {}, action) {
  switch (action.type) {
    case useConstants.REGISTER_REQUEST:
      return { backdrop: true };
    case useConstants.REGISTER_SUCCESS:
      return {};
    case useConstants.REGISTER_FAILURE:
      return {};
    //   break;

    default:
      return state;
  }
}
