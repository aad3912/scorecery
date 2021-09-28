import { createContext } from "react";

interface GlobalContextT {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<GlobalContextT>({
  isAuth: false,
  setIsAuth: () => {},
});

export default AuthContext;
