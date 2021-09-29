import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const LoggedOutRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default LoggedOutRoute;
