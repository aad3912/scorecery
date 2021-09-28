/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { getFromApi } from "../common/constants";
import GenericDisplay from "../widgets/generic-small-widget/GenericDisplay";
import StandingsWidget from "../widgets/standings/Standings";
import { LargerWidgets, LeagueInfo, SmallerWidgets } from "./DataElements";
import dummyStandings from "../dummy/DummyStandings";
import dummyMatches from "../dummy/DummyMatches";

interface PropsT {
  selectedId: number;
}

const getFixtures = (matches: MatchesResponseT[]) => {
  const fixtures = [];
  const results = [];
  const started = [];
  for (let match of matches) {
    const status = match.fixture.status.short;
    const newMatch: MatchesResponseT = {
      ...match,
      fixture: { ...match.fixture, dateObj: new Date(match.fixture.date) },
    };
    if (status === "FT") {
      results.push(newMatch);
    } else if (status === "NS") {
      fixtures.push(newMatch);
    } else {
      started.push(newMatch);
    }
  }

  fixtures.sort(
    (a, b) => a.fixture.dateObj!.getTime() - b.fixture.dateObj!.getTime()
  );
  started.sort(
    (a, b) => a.fixture.dateObj!.getTime() - b.fixture.dateObj!.getTime()
  );
  results.sort(
    (a, b) => b.fixture.dateObj!.getTime() - a.fixture.dateObj!.getTime()
  );

  return { fixtures, started, results };
};

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
      setStandings(
        result.length
          ? result[0].league.standings.length
            ? result[0].league.standings[0]
            : []
          : []
      );
      // setTimeout(getStandings, 10000);
      // setStandings(dummyStandings);
    }
    getStandings();
  }, [selectedId]);

  useEffect(() => {
    if (standings.length) {
      async function getMatches() {
        const params: MatchParamsT = {
          league: `${selectedId}`,
          season: "2021",
        };
        const result = (await getFromApi(
          "/fixtures",
          params
        )) as MatchesResponseT[];
        // const result = dummyMatches;
        let { fixtures, started, results } = getFixtures(result);
        setFixtures(fixtures);
        setStarted(started);
        setResults(results);
        setRetrieved(true);
      }
      getMatches();
    }
  }, [selectedId, standings]);

  return (
    <LeagueInfo>
      <LargerWidgets>
        <StandingsWidget standings={standings} retrieved={retrieved} />
      </LargerWidgets>
      <SmallerWidgets numberOfTeams={standings.length}>
        <GenericDisplay retrieved={retrieved} results={false} data={fixtures} />
        <GenericDisplay retrieved={retrieved} results={true} data={results} />
      </SmallerWidgets>
    </LeagueInfo>
  );
};

export default LeagueWidgets;
