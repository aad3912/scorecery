/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Select, { Props } from "react-select";
import makeAnimated from "react-select/animated";
import AuthContext from "../../../context/AuthContext";
import { getFromApi } from "../../common/constants";

const animatedComponents = makeAnimated();

const dummyLeagues: SelectOption[] = [
  { label: "Premier League", value: 39 },
  { label: "Ligue 1", value: 61 },
  { label: "Bundesliga 1", value: 78 },
  { label: "Primera Division", value: 140 },
];

interface PropsT {
  setSelectedLeagues: React.Dispatch<React.SetStateAction<SelectOption[]>>;
}

const LeaguesSelector = ({ setSelectedLeagues }: PropsT) => {
  const [leagues, setLeagues] = useState<SelectOption[]>([]);
  const { userState } = useContext(AuthContext);
  useEffect(() => {
    async function getLeagues() {
      const params: LeagueParamsT = {
        current: "true",
      };
      const userLeagueSet = new Set(userState.leagues.map((x) => x._id));
      const options = (await getFromApi(
        "/leagues",
        params
      )) as LeaguesResponseT[];
      const result = options
        .filter(
          (competition) =>
            competition.league.type === "League" &&
            !userLeagueSet.has(competition.league.id)
        )
        .map((competition) => {
          return {
            value: competition.league.id,
            label: `${competition.league.name} [${competition.country.name}]`,
          };
        });
      setLeagues(result);
      // setLeagues(dummyLeagues);
    }
    getLeagues();
  }, [userState.leagues]);
  return (
    <Select
      components={animatedComponents}
      isMulti
      onChange={(newValue) => {
        setSelectedLeagues(newValue as SelectOption[]);
      }}
      options={leagues}
    />
  );
};

export default LeaguesSelector;
