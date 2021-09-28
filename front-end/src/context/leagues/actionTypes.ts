type LeagueActionsT =
  | { type: "ADD_LEAGUES"; payload: LeagueDataT[] }
  | { type: "REMOVE_LEAGUE"; payload: LeagueDataT };

export default LeagueActionsT;
