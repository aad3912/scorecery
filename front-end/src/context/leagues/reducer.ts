import LeagueActionsT from "./actionTypes";

const leagueReducer = (state: GlobalStateT, action: LeagueActionsT) => {
  switch (action.type) {
    case "ADD_LEAGUES":
      return { ...state, leagues: state.leagues.concat(action.payload) };
    case "REMOVE_LEAGUE":
      return {
        ...state,
        leagues: state.leagues.filter(
          (league) => league._id !== action.payload._id
        ),
      };
  }
};

export default leagueReducer;
