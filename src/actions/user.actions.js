import { useConstants } from "../Constants/use.constant";
import History from "../Helper/History";
import { useService } from "../services/user.service";

export const useActions = {
  register,
  login,
};
function register(user) {
  console.log(user);
  return (dispatch) => {
    dispatch(request(user));
    useService.register(user).then(
      (data) => {
        console.log(data);
        dispatch(success(data));
        History.push("/SignIn");
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function request(user) {
    return {
      type: useConstants.REGISTER_REQUEST,
      user,
    };
  }
  function success(user) {
    return {
      type: useConstants.REGISTER_SUCCESS,
      user,
    };
  }
  function failure(user) {
    return {
      type: useConstants.REGISTER_FAILURE,
      user,
    };
  }
}

function login(user, from) {
  // console.log(user);
  return (dispatch) => {
    dispatch(request(user.username));

    useService.login(user).then(
      (data) => {
        dispatch(success(data));
        History.push(from);
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: useConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: useConstants.LOGIN_SUCCESS, user };
  }
  function failure(user) {
    return { type: useConstants.LOGIN_FAILURE, user };
  }
}
