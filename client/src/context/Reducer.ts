import LeagueActionsT from "./leagues/actionTypes";
import leagueReducer from "./leagues/reducer";

export type ActionT =
  | LeagueActionsT
  | { type: "SET_USERNAME"; payload: string };

const reducer = (
  userState: GlobalUserStateT,
  action: ActionT
): GlobalUserStateT => {
  switch (action.type) {
    case "ADD_LEAGUES":
    case "REMOVE_LEAGUE":
    case "SET_LEAGUES":
      return leagueReducer(userState, action);
    case "SET_USERNAME":
      return { ...userState, username: action.payload };
    default:
      return userState;
  }
};

export default reducer;
