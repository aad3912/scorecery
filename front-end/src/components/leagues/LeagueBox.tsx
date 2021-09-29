import { useContext, useEffect, useState } from "react";
import HorizontalSlider from "../widgets/horizontal-slider/HorizontalSlider";
import { LeagueBoxContainer, LeagueBoxWrapper } from "./LeagueBoxElements";
import Loading from "../common/Loading";
import LeagueWidgets from "./LeagueData";
import AuthContext from "../../context/AuthContext";

const INITIAL_ID = -1;
const NOT_RETRIEVED = false;

const LeagueBox = () => {
  const [selectedId, setSelectedId] = useState(INITIAL_ID);
  const [retrieved, setRetrieved] = useState(NOT_RETRIEVED);
  const {
    userState: { leagues },
  } = useContext(AuthContext);

  useEffect(() => {
    setRetrieved(false);
    setSelectedId((selectedId) =>
      leagues.length
        ? selectedId === INITIAL_ID
          ? leagues[0]._id
          : selectedId
        : INITIAL_ID
    );
    setRetrieved(true);
  }, [leagues]);

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
                data={leagues}
                setSelectedId={setSelectedId}
              />
              <LeagueWidgets selectedId={selectedId} />
            </>
          )
        ) : (
          <Loading>
            Loading
            <br />
            your
            <br />
            preferences
            <br />
            ...
          </Loading>
        )}
      </LeagueBoxWrapper>
    </LeagueBoxContainer>
  );
};

export default LeagueBox;
