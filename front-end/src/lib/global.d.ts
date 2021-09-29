type numInPx = `${number}px`;
type numInPct = `${number}%`;

type StandingsParamsT = {
  league: `${number}`;
  season: `${number}`;
};

type LeagueParamsT = {
  current: "true" | "false";
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

type SpecificResponseT =
  | StandingsResponseT
  | LeaguesResponseT
  | MatchesResponseT;

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

interface LeaguesResponseT {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: string;
    code: string;
  };
}

interface SelectOption {
  value: number;
  label: string;
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

interface GlobalUserStateT {
  leagues: LeagueDataT[];
  username: string;
}
