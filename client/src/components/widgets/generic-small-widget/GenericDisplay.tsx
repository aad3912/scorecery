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
  retrieved: boolean;
}

const GenericDisplay = ({ retrieved, data, results }: PropsT) => {
  const heading = results ? "Results" : "Fixtures";

  return (
    <DisplayContainer>
      <DisplayWrapper justifyCenter={data.length === 0}>
        {retrieved ? (
          data.length ? (
            <>
              <DisplayH1>{heading}</DisplayH1>
              <DisplayTableWrapper>
                <DisplayTable>
                  <DisplayTHead>
                    <DisplayTR>
                      <DisplayTH>
                        Date {"&"} <br /> Time
                      </DisplayTH>
                      <DisplayTH>Venue</DisplayTH>
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
                    {data.map((match) => {
                      return (
                        <DisplayTR key={match.fixture.id}>
                          <DisplayTD>
                            {match.fixture.dateObj?.toLocaleDateString("gb")}
                            <br />
                            {match.fixture.dateObj
                              ?.toLocaleTimeString("gb")
                              .substring(0, 5)}
                          </DisplayTD>
                          <DisplayTD>{match.fixture.venue.name}</DisplayTD>
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
          )
        ) : (
          <Loading smallFont>
            Retrieving
            <br /> {heading}...
          </Loading>
        )}
      </DisplayWrapper>
    </DisplayContainer>
  );
};

export default GenericDisplay;
