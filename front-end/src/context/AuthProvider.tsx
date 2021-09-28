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

  const [state, dispatch] = useReducer(reducer, { leagues: [] });
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
