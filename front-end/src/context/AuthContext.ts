import { createContext } from "react";
import LeagueActionsT from "./leagues/actionTypes";
import { ActionT } from "./Reducer";

interface GlobalContextT {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  userState: GlobalUserStateT;
  userDispatch: React.Dispatch<ActionT>;
}

const AuthContext = createContext<GlobalContextT>({} as GlobalContextT);

export default AuthContext;
