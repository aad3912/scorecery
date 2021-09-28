import LeagueActionsT from "./leagues/actionTypes";
import leagueReducer from "./leagues/reducer";

type ActionT = LeagueActionsT;

const reducer = (state: GlobalStateT, action: ActionT): GlobalStateT => {
  switch (action.type) {
    case "ADD_LEAGUES":
    case "REMOVE_LEAGUE":
      return leagueReducer(state, action);
    default:
      return state;
  }
};

export default reducer;
