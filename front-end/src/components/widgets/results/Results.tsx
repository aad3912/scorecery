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
} from "./ResultsElements";

interface PropsT {
  results: MatchesResponseT[];
}

const Results = ({ results }: PropsT) => {
  return (
    <ResultsContainer justifyCenter={results.length === 0}>
      {results.length ? (
        <>
          <ResultsH1>Results</ResultsH1>
          <ResultsTable>
            <ResultsTHead>
              <ResultsTR>
                <ResultsTH>Date</ResultsTH>
                <ResultsTH>
                  Home
                  <br />
                  (Goals)
                </ResultsTH>
                <ResultsTH>
                  Away
                  <br />
                  (Goals)
                </ResultsTH>
              </ResultsTR>
            </ResultsTHead>
            <ResultsTBody>
              {results.map((result, index) => {
                return (
                  /* TODO: CHANGE KEY BACK TO result.fixture.id */
                  <ResultsTR key={index}>
                    <ResultsTD>
                      {result.fixture.date.substring(0, 10)}
                      <br />
                      {result.fixture.venue.name}
                    </ResultsTD>
                    <ResultsTD>
                      {result.teams.home.name}
                      <br />({result.goals.home})
                    </ResultsTD>
                    <ResultsTD>
                      {result.teams.away.name}
                      <br />({result.goals.away})
                    </ResultsTD>
                  </ResultsTR>
                );
              })}
            </ResultsTBody>
          </ResultsTable>
        </>
      ) : (
        <Loading smallFont>No results to show!</Loading>
      )}
    </ResultsContainer>
  );
};

export default Results;
