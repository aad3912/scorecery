import { useEffect, useState } from "react";
// import { getFromApi } from "../../common/constants";
import Loading from "../../common/Loading";
import {
  StandingsContainer,
  StandingsTable,
  StandingsTBody,
  StandingsTD,
  StandingsTH,
  StandingsTHead,
  StandingsTR,
  StandingsH1,
  TeamLogo,
  FormLetter,
} from "./StandingsElements";

interface PropsT {
  selectedId: number;
}

const dummy: StandingsDataT[] = [
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
];

const StandingsWidget = ({ selectedId }: PropsT) => {
  const [standings, setStandings] = useState<StandingsDataT[]>([]);
  const [retrieved, setRetrieved] = useState(false);
  useEffect(() => {
    async function getStandings() {
      // const params: StandingsParamsT = {
      //   league: `${selectedId}`,
      //   season: "2021",
      // };

      // const result = (await getFromApi(
      //   "/standings",
      //   params
      // )) as StandingsResponseT[];
      // setStandings(result[0].league.standings[0]);
      // setTimeout(getStandings, 10000);
      setStandings(dummy);
    }
    getStandings();
  }, [selectedId]);

  useEffect(() => {
    setRetrieved(true);
  }, [standings]);

  return retrieved ? (
    <StandingsContainer>
      <StandingsH1>Standings</StandingsH1>
      <StandingsTable>
        <StandingsTHead>
          <StandingsTR>
            <StandingsTH>Rank</StandingsTH>
            <StandingsTH>Logo</StandingsTH>
            <StandingsTH>Team Name</StandingsTH>
            <StandingsTH>Points</StandingsTH>
            <StandingsTH>Form</StandingsTH>
          </StandingsTR>
        </StandingsTHead>
        <StandingsTBody>
          {standings.map((row, index) => (
            <StandingsTR key={row.team.id}>
              <StandingsTD>#{index + 1}</StandingsTD>
              <StandingsTD>
                <TeamLogo src={row.team.logo} alt={row.team.name} />
              </StandingsTD>
              <StandingsTD>{row.team.name}</StandingsTD>
              <StandingsTD>{row.points}</StandingsTD>
              <StandingsTD>
                {Array.prototype.map.call(row.form, (letter, idx) => {
                  return (
                    <FormLetter key={idx} letter={letter}>
                      {letter}
                    </FormLetter>
                  );
                })}
              </StandingsTD>
            </StandingsTR>
          ))}
        </StandingsTBody>
      </StandingsTable>
    </StandingsContainer>
  ) : (
    <Loading smallFont>Retrieving standings...</Loading>
  );
};

export default StandingsWidget;
