import LeagueActionsT from "./actionTypes";

const leagueReducer = (userState: GlobalUserStateT, action: LeagueActionsT) => {
  switch (action.type) {
    case "ADD_LEAGUES":
      const newAddLeagues = userState.leagues.concat(action.payload);
      localStorage.setItem("leagues", JSON.stringify(newAddLeagues));
      return {
        ...userState,
        leagues: newAddLeagues,
      };
    case "REMOVE_LEAGUE":
      const newRemoveLeagues = userState.leagues.filter(
        (league) => league._id !== action.payload._id
      );
      localStorage.setItem("leagues", JSON.stringify(newRemoveLeagues));
      return {
        ...userState,
        leagues: newRemoveLeagues,
      };
    case "SET_LEAGUES":
      localStorage.setItem("leagues", JSON.stringify(action.payload));
      return { ...userState, leagues: action.payload };
  }
};

export default leagueReducer;
