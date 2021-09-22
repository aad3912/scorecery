import { useEffect, useState } from "react";
import HorizontalSlider from "../widgets/horizontal-slider/HorizontalSlider";
import { LeagueBoxContainer, LeagueBoxWrapper } from "./LeagueBoxElements";
import Loading from "../common/Loading";
import LeagueWidgets from "./LeagueData";

const INITIAL_ID = -1;
const NOT_RETRIEVED = false;
const dummy: LeagueDataT[] = [
  { name: "Premier League", id: 39, country: { name: "England", code: "GB" } },
  { name: "Ligue 1", id: 61, country: { name: "France", code: "FR" } },
  { name: "Bundesliga 1", id: 78, country: { name: "Germany", code: "DE" } },
  { name: "Primera Division", id: 140, country: { name: "Spain", code: "ES" } },
];

const LeagueBox = () => {
  const [selectedId, setSelectedId] = useState(INITIAL_ID);
  const [data, setData] = useState<LeagueDataT[]>([]);
  const [retrieved, setRetrieved] = useState(NOT_RETRIEVED);

  useEffect(() => {
    setData(dummy);
  }, []);

  useEffect(() => {
    setRetrieved(false);
    setSelectedId((selectedId) =>
      data.length
        ? selectedId === INITIAL_ID
          ? data[0].id
          : selectedId
        : INITIAL_ID
    );
    setRetrieved(true);
  }, [data]);

  const justifyAccordingly = {
    justifyContent:
      retrieved && selectedId !== INITIAL_ID ? "flex-start" : "center",
  };

  return (
    <LeagueBoxContainer style={justifyAccordingly}>
      <LeagueBoxWrapper>
        {" "}
        {retrieved ? (
          selectedId === INITIAL_ID ? (
            <Loading>
              ......
              <br />
              Add some of your preferred leagues
              <br />
              ......
            </Loading>
          ) : (
            <>
              <HorizontalSlider
                selectedId={selectedId}
                data={data}
                setSelectedId={setSelectedId}
              />
              <LeagueWidgets selectedId={selectedId} />
            </>
          )
        ) : (
          <Loading>
            LOADING
            <br />
            YOUR
            <br />
            PREFERENCES
            <br />
            ...
          </Loading>
        )}
      </LeagueBoxWrapper>
    </LeagueBoxContainer>
  );
};

export default LeagueBox;
