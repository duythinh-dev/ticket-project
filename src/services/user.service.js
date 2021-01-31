/* eslint-disable no-unused-vars */
export const useService = {
  register,
  login,
};
function register(user) {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`/users/register`, request).then((response) => {
    // console.log(response);
    response.text().then((text) => {
      console.log("xx", text);
    });
  });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
  localStorage.setItem("state", false);
}
function login(user) {
  // console.log("đã vào đây");
  const { username, password } = user;
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`/users/authenticate`, request)
    .then((response) => {
      return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            // location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        return data;
      });
    })
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("state", true);
      return user;
    });
}
