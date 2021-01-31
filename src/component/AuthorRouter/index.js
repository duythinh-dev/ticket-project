import React from "react";
import { Redirect, Route } from "react-router-dom";

function AuthorRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("user")) {
          return (
            <Redirect
              to={{ pathname: "/SignIn", state: { from: props.location } }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}

export default AuthorRoute;
