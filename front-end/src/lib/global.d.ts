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

type APIParamsT = StandingsParamsT | LeagueParamsT;

type LocationT = `/${string}`;

interface ResponseT {
  response: SpecificResponseT[];
}

type SpecificResponseT = StandingsResponseT | LeagueDataT;

interface LeagueDataT {
  name: string;
  id: number;
  country: { name: string; code: string };
}

interface StandingsResponseT {
  league: {
    standings: StandingsDataT[][];
  };
}

interface StandingsDataT {
  form: string;
  points: number;
  team: {
    name: string;
    logo: string;
    id: number;
  };
}

interface StandingsResponseT {
  response: {
    league: {
      standings: StandingsDataT[][];
    };
  }[];
}
