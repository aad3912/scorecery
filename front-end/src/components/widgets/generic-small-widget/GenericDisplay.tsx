import Loading from "../../common/Loading";
import {
  DisplayContainer,
  DisplayH1,
  DisplayTable,
  DisplayTBody,
  DisplayTD,
  DisplayTH,
  DisplayTHead,
  DisplayTR,
  DisplayWrapper,
  DisplayTableWrapper,
} from "./DisplayElements";

interface PropsT {
  data: MatchesResponseT[];
  results: boolean;
}

const GenericDisplay = ({ data, results }: PropsT) => {
  const heading = results ? "Results" : "Fixtures";

  return (
    <DisplayContainer>
      <DisplayWrapper justifyCenter={data.length === 0}>
        {data.length ? (
          <>
            <DisplayH1>{heading}</DisplayH1>
            <DisplayTableWrapper>
              <DisplayTable>
                <DisplayTHead>
                  <DisplayTR>
                    <DisplayTH>Date</DisplayTH>
                    <DisplayTH>
                      Home
                      {results && (
                        <>
                          <br />
                          (Goals)
                        </>
                      )}
                    </DisplayTH>
                    <DisplayTH>
                      Away
                      {results && (
                        <>
                          <br />
                          (Goals)
                        </>
                      )}
                    </DisplayTH>
                  </DisplayTR>
                </DisplayTHead>
                <DisplayTBody>
                  {data.map((match, index) => {
                    return (
                      /* TODO: CHANGE KEY BACK TO result.fixture.id */
                      <DisplayTR key={index}>
                        <DisplayTD>
                          {match.fixture.date.substring(0, 10)}
                          <br />
                          {match.fixture.venue.name}
                        </DisplayTD>
                        <DisplayTD>
                          {match.teams.home.name}
                          {results && (
                            <>
                              <br />({match.goals.home})
                            </>
                          )}
                        </DisplayTD>
                        <DisplayTD>
                          {match.teams.away.name}
                          {results && (
                            <>
                              <br />({match.goals.away})
                            </>
                          )}
                        </DisplayTD>
                      </DisplayTR>
                    );
                  })}
                </DisplayTBody>
              </DisplayTable>
            </DisplayTableWrapper>
          </>
        ) : (
          <Loading smallFont>No {heading} to show!</Loading>
        )}
      </DisplayWrapper>
    </DisplayContainer>
  );
};

export default GenericDisplay;
