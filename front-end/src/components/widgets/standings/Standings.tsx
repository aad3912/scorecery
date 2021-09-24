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
  StandingsTableWrapper,
} from "./StandingsElements";

interface PropsT {
  retrieved: boolean;
  standings: StandingsDataT[];
}

const StandingsWidget = ({ retrieved, standings }: PropsT) => {
  return (
    <StandingsContainer>
      {retrieved ? (
        <>
          <StandingsH1>Standings</StandingsH1>
          <StandingsTableWrapper>
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
          </StandingsTableWrapper>
        </>
      ) : (
        <Loading smallFont>Retrieving standings...</Loading>
      )}
    </StandingsContainer>
  );
};

export default StandingsWidget;
