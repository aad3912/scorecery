import { createContext } from "react";
import LeagueActionsT from "./leagues/actionTypes";

interface GlobalContextT {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  state: GlobalStateT;
  dispatch: React.Dispatch<LeagueActionsT>;
}

const AuthContext = createContext<GlobalContextT>({} as GlobalContextT);

export default AuthContext;
