type LeagueActionsT =
  | { type: "ADD_LEAGUES"; payload: LeagueDataT[] }
  | { type: "REMOVE_LEAGUE"; payload: LeagueDataT }
  | { type: "SET_LEAGUES"; payload: LeagueDataT[] };

export default LeagueActionsT;
