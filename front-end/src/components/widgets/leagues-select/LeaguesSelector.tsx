/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Select, { Props } from "react-select";
import makeAnimated from "react-select/animated";
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
  selectedLeagues: SelectOption[];
}

const LeaguesSelector = ({ selectedLeagues, setSelectedLeagues }: PropsT) => {
  const [leagues, setLeagues] = useState<SelectOption[]>([]);
  useEffect(() => {
    async function getLeagues() {
      // const params: LeagueParamsT = {
      //   current: "true",
      // };

      // const options = (await getFromApi(
      //   "/leagues",
      //   params
      // )) as LeaguesResponseT[];
      // const result = options
      //   .filter((competition) => competition.league.type === "League")
      //   .map((competition) => {
      //     return {
      //       value: competition.league.id,
      //       label: `${competition.league.name} (${competition.country.name})`,
      //     };
      //   });
      // console.log(result);
      // setLeagues(result);
      setLeagues(dummyLeagues);
    }
    getLeagues();
  }, []);
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
