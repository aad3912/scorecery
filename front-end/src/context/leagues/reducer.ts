import LeagueActionsT from "./actionTypes";

const leagueReducer = (userState: GlobalUserStateT, action: LeagueActionsT) => {
  switch (action.type) {
    case "ADD_LEAGUES":
      return {
        ...userState,
        leagues: userState.leagues.concat(action.payload),
      };
    case "REMOVE_LEAGUE":
      return {
        ...userState,
        leagues: userState.leagues.filter(
          (league) => league._id !== action.payload._id
        ),
      };
    case "SET_LEAGUES":
      return { ...userState, leagues: action.payload };
  }
};

export default leagueReducer;
