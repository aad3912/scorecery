import { ReactNode, useReducer, useState } from "react";
import AuthContext from "./AuthContext";
import reducer from "./Reducer";

interface PropsT {
  children: ReactNode;
}

const AuthProvider = (props: PropsT) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("authToken") ? true : false
  );

  const [userState, userDispatch] = useReducer(reducer, {
    leagues: [],
    username: "",
  });
  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, userState, userDispatch }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
