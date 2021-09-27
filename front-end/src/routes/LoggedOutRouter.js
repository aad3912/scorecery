import React from "react";
import { Route, Redirect } from "react-router-dom";

const LoggedOutRoute = ({ component: Component, ...rest }) => {
  console.log("Here");
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Redirect to="/leagues" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default LoggedOutRoute;
