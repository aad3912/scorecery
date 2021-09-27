import { ReactNode, useState } from "react";
import AuthContext from "./AuthContext";

interface PropsT {
  children: ReactNode;
}

const AuthProvider = (props: PropsT) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
