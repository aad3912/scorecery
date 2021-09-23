import { useEffect, useState } from "react";
import { getFromApi } from "../common/constants";
import Fixtures from "../widgets/fixtures/Fixtures";
import Results from "../widgets/results/Results";
import StandingsWidget from "../widgets/standings/Standings";
import { LeagueInfo, SmallerWidgets } from "./DataElements";

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

const LeagueWidgets = ({ selectedId }: PropsT) => {
  const [fixtures, setFixtures] = useState<MatchesResponseT[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [started, setStarted] = useState<MatchesResponseT[]>([]);
  const [results, setResults] = useState<MatchesResponseT[]>([
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
  ]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    }
    // getMatches();
  }, [selectedId]);

  return (
    <LeagueInfo>
      <StandingsWidget selectedId={selectedId} />
      <SmallerWidgets>
        <Results results={results} />
        <Fixtures fixtures={fixtures} />
      </SmallerWidgets>
    </LeagueInfo>
  );
};

export default LeagueWidgets;
