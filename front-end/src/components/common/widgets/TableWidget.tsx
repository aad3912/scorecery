import { useEffect, useState } from "react";
import Loading from "../Loading";
import { getFromApi } from "../constants";
import { StandingsContainer, TeamInformation } from "./TableWidgetElements";

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
      name: "Manchester United SSSSSSSS",
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

const TableWidget = ({ selectedId }: PropsT) => {
  const [standings, setStandings] = useState<StandingsDataT[]>([]);
  const [retrieved, setRetrieved] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function getStandings() {
      const params: StandingsParamsT = {
        league: `${selectedId}`,
        season: "2021",
      };

      const result = await getFromApi("/standings", params);
      console.log(result);
      setStandings(result);
      return result;
    }
    // getStandings();
    setStandings(dummy);
  }, [selectedId]);

  useEffect(() => {
    setRetrieved(true);
  }, [standings]);

  return (
    <StandingsContainer>
      {retrieved ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: "10px",
            columnGap: "10px",
          }}
        >
          {standings.map((row) => (
            <TeamInformation key={row.team.id}>
              <img
                width="40px"
                height="40px"
                src={row.team.logo}
                alt={row.team.name}
              />
              <div>{row.team.name}</div>
              <div>{row.points}</div>
              <div>{row.form}</div>
            </TeamInformation>
          ))}
        </div>
      ) : (
        <Loading>Retrieving standings...</Loading>
      )}
    </StandingsContainer>
  );
};

export default TableWidget;
