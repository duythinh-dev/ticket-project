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

function login(user) {
  const { username, password } = user;
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`/users/authenticate`, request)
    .then((response) => {
      // console.log(response);
      return response.text().then((text) => {
        const data = text && JSON.parse(text);

        return data;
      });
    })
    .then((user) => {
      // console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
    });
}
