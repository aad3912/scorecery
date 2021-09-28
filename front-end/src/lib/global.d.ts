type numInPx = `${number}px`;
type numInPct = `${number}%`;

type StandingsParamsT = {
  league: `${number}`;
  season: `${number}`;
};

type LeagueParamsT = {
  current: "true" | "false";
  code: string;
};

type MatchParamsT = {
  league: `${number}`;
  season: `${number}`;
};

type APIParamsT = StandingsParamsT | LeagueParamsT | MatchParamsT;

type LocationT = `/${string}`;

interface ResponseT {
  response: SpecificResponseT[];
}

type SpecificResponseT = StandingsResponseT | LeagueDataT | MatchesResponseT;

interface LeagueDataT {
  name: string;
  _id: number;
}

interface StandingsResponseT {
  league: {
    standings: StandingsDataT[][];
  };
}

interface TeamsResponseT {
  name: string;
  logo: string;
  id: number;
}

interface StandingsDataT {
  form: string;
  points: number;
  team: TeamsResponseT;
}

interface MatchesResponseT {
  fixture: {
    date: string;
    dateObj?: Date;
    id: number;
    status: {
      short: string;
    };
    venue: {
      name: string;
    };
  };
  goals: {
    away: number;
    home: number;
  };
  teams: {
    away: TeamsResponseT;
    home: TeamsResponseT;
  };
}

interface ErrorResponseType {
  response: {
    data: {
      success: boolean;
      error: string;
    };
  };
}

interface GlobalStateT {
  leagues: LeagueDataT[];
}
