/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { getFromApi } from "../common/constants";
import Results from "../widgets/results/Results";
import StandingsWidget from "../widgets/standings/Standings";
import { LargerWidgets, LeagueInfo, SmallerWidgets } from "./DataElements";
interface PropsT {
  selectedId: number;
}

const getFixtures = (matches: MatchesResponseT[]) => {
  const fixtures = [];
  const results = [];
  const started = [];
  for (let match of matches) {
    const status = match.fixture.status.short;
    if (status === "FT") {
      results.push(match);
    } else if (status === "NS") {
      fixtures.push(match);
    } else {
      started.push(match);
    }
  }
  return { fixtures, started, results };
};

const dummy: MatchesResponseT[] = [
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
  {
    fixture: {
      id: 0,
      status: { short: "FT" },
      date: "Today",
      venue: { name: "Somewwwwwwwwwwwwwwwwwwhere" },
    },
    goals: {
      home: 0,
      away: 2,
    },
    teams: {
      home: { name: "Arsenal", logo: "", id: 42 },
      away: { name: "Brentford", logo: "", id: 69 },
    },
  },
];

const dummyStandings: StandingsDataT[] = [
  {
    form: "WWDWW",
    team: {
      name: "Chelsea",
      id: 49,
      logo: "https://media.api-sports.io/football/teams/49.png",
    },
    points: 13,
  },
  {
    form: "WWDWW",
    team: {
      name: "Liverpool",
      id: 40,
      logo: "https://media.api-sports.io/football/teams/40.png",
    },
    points: 13,
  },
  {
    form: "WWWDW",
    team: {
      name: "Manchester United",
      id: 33,
      logo: "https://media.api-sports.io/football/teams/33.png",
    },
    points: 13,
  },
  {
    form: "WWLWW",
    team: {
      name: "Brighton",
      id: 51,
      logo: "https://media.api-sports.io/football/teams/51.png",
    },
    points: 12,
  },
  {
    form: "DWWWL",
    team: {
      name: "Manchester City",
      id: 50,
      logo: "https://media.api-sports.io/football/teams/49.png",
    },
    points: 10,
  },
  {
    form: "LWWDW",
    team: {
      name: "Everton",
      id: 45,
      logo: "https://media.api-sports.io/football/teams/45.png",
    },
    points: 10,
  },
  {
    form: "LLWWW",
    team: {
      name: "Tottenham",
      id: 47,
      logo: "https://media.api-sports.io/football/teams/47.png",
    },
    points: 9,
  },
  {
    form: "LDDWW",
    team: {
      name: "West Ham",
      id: 48,
      logo: "https://media.api-sports.io/football/teams/48.png",
    },
    points: 8,
  },
  {
    form: "WLDDW",
    team: {
      name: "Brentford",
      id: 55,
      logo: "https://media.api-sports.io/football/teams/55.png",
    },
    points: 8,
  },
  {
    form: "WLDWL",
    team: {
      name: "Aston Villa",
      id: 66,
      logo: "https://media.api-sports.io/football/teams/66.png",
    },
    points: 7,
  },
  {
    form: "WLLLW",
    team: {
      name: "Watford",
      id: 38,
      logo: "https://media.api-sports.io/football/teams/38.png",
    },
    points: 6,
  },
  {
    form: "LLWLW",
    team: {
      name: "Leicester",
      id: 46,
      logo: "https://media.api-sports.io/football/teams/46.png",
    },
    points: 6,
  },
  {
    form: "WWLLL",
    team: {
      name: "Arsenal",
      id: 42,
      logo: "https://media.api-sports.io/football/teams/42.png",
    },
    points: 6,
  },
  {
    form: "LWDDL",
    team: {
      name: "Crystal Palace",
      id: 52,
      logo: "https://media.api-sports.io/football/teams/52.png",
    },
    points: 5,
  },
  {
    form: "LWDDL",
    team: {
      name: "Crystal Palace",
      id: 52,
      logo: "https://media.api-sports.io/football/teams/52.png",
    },
    points: 5,
  },
  {
    form: "LWDDL",
    team: {
      name: "Crystal Palace",
      id: 52,
      logo: "https://media.api-sports.io/football/teams/52.png",
    },
    points: 5,
  },
  {
    form: "LWDDL",
    team: {
      name: "Crystal Palace",
      id: 52,
      logo: "https://media.api-sports.io/football/teams/52.png",
    },
    points: 5,
  },
  {
    form: "LWDDL",
    team: {
      name: "Crystal Palace",
      id: 52,
      logo: "https://media.api-sports.io/football/teams/52.png",
    },
    points: 5,
  },
  {
    form: "LWDDL",
    team: {
      name: "Crystal Palace",
      id: 52,
      logo: "https://media.api-sports.io/football/teams/52.png",
    },
    points: 5,
  },
  {
    form: "LWDDL",
    team: {
      name: "Crystal Palace",
      id: 52,
      logo: "https://media.api-sports.io/football/teams/52.png",
    },
    points: 5,
  },
];

const LeagueWidgets = ({ selectedId }: PropsT) => {
  const [fixtures, setFixtures] = useState<MatchesResponseT[]>([]);
  const [started, setStarted] = useState<MatchesResponseT[]>([]);
  const [results, setResults] = useState<MatchesResponseT[]>([]);
  const [standings, setStandings] = useState<StandingsDataT[]>([]);
  const [retrieved, setRetrieved] = useState(false);

  useEffect(() => {
    async function getStandings() {
      const params: StandingsParamsT = {
        league: `${selectedId}`,
        season: "2021",
      };
      const result = (await getFromApi(
        "/standings",
        params
      )) as StandingsResponseT[];
      setStandings(result[0].league.standings[0]);
      // setTimeout(getStandings, 10000);
      // setStandings(dummyStandings);
    }
    getStandings();
  }, [selectedId]);

  useEffect(() => {
    if (standings.length) {
      setRetrieved(true);
    }
  }, [standings]);

  useEffect(() => {
    async function getMatches() {
      const params: MatchParamsT = {
        league: `${selectedId}`,
        season: "2021",
      };
      const result = (await getFromApi(
        "/fixtures",
        params
      )) as MatchesResponseT[];
      let { fixtures, started, results } = getFixtures(result);
      setFixtures(fixtures);
      setStarted(started);
      setResults(results);
      // setResults(dummy);
    }
    getMatches();
  }, [selectedId]);

  return (
    <LeagueInfo>
      <LargerWidgets>
        <StandingsWidget standings={standings} retrieved={retrieved} />
      </LargerWidgets>
      <SmallerWidgets numberOfTeams={standings.length}>
        <Results results={false} data={fixtures} />
        <Results results={true} data={results} />
      </SmallerWidgets>
    </LeagueInfo>
  );
};

export default LeagueWidgets;
