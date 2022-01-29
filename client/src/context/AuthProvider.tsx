import { ReactNode, useEffect, useReducer, useState } from "react";
import AuthContext from "./AuthContext";
import reducer from "./Reducer";

interface PropsT {
  children: ReactNode;
}

const AuthProvider = (props: PropsT) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userState, userDispatch] = useReducer(reducer, {
    leagues: [],
    username: "",
  });

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setIsAuth(true);
      userDispatch({
        type: "SET_USERNAME",
        payload: localStorage.getItem("username") || "",
      });
      userDispatch({
        type: "SET_LEAGUES",
        payload: JSON.parse(localStorage.getItem("leagues") || ""),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, userState, userDispatch }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
