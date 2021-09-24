import Loading from "../../common/Loading";
import {
  ResultsContainer,
  ResultsH1,
  ResultsTable,
  ResultsTBody,
  ResultsTD,
  ResultsTH,
  ResultsTHead,
  ResultsTR,
  ResultsWrapper,
} from "./ResultsElements";

interface PropsT {
  data: MatchesResponseT[];
  results: boolean;
}

const Results = ({ data, results }: PropsT) => {
  const heading = results ? "Results" : "Fixtures";

  return (
    <ResultsContainer>
      <ResultsWrapper justifyCenter={data.length === 0}>
        {data.length ? (
          <>
            <ResultsH1>{heading}</ResultsH1>
            <ResultsTable>
              <ResultsTHead>
                <ResultsTR>
                  <ResultsTH>Date</ResultsTH>
                  <ResultsTH>
                    Home
                    {results && (
                      <>
                        <br />
                        (Goals)
                      </>
                    )}
                  </ResultsTH>
                  <ResultsTH>
                    Away
                    {results && (
                      <>
                        <br />
                        (Goals)
                      </>
                    )}
                  </ResultsTH>
                </ResultsTR>
              </ResultsTHead>
              <ResultsTBody>
                {data.map((match, index) => {
                  return (
                    /* TODO: CHANGE KEY BACK TO result.fixture.id */
                    <ResultsTR key={index}>
                      <ResultsTD>
                        {match.fixture.date.substring(0, 10)}
                        <br />
                        {match.fixture.venue.name}
                      </ResultsTD>
                      <ResultsTD>
                        {match.teams.home.name}
                        {results && (
                          <>
                            <br />({match.goals.home})
                          </>
                        )}
                      </ResultsTD>
                      <ResultsTD>
                        {match.teams.away.name}
                        {results && (
                          <>
                            <br />({match.goals.away})
                          </>
                        )}
                      </ResultsTD>
                    </ResultsTR>
                  );
                })}
              </ResultsTBody>
            </ResultsTable>
          </>
        ) : (
          <Loading smallFont>No {heading} to show!</Loading>
        )}
      </ResultsWrapper>
    </ResultsContainer>
  );
};

export default Results;
