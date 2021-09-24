import styled from "styled-components";

export const StandingsContainer = styled.div`
  width: 100%;
  justify-content: center;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: #00f783 transparent;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1rem;
  border: none;
`;

export const StandingsH1 = styled.h1``;

export const StandingsTable = styled.table`
  border-collapse: collapse;
  font-size: 1rem;
  border: 1px solid;
`;

export const StandingsTHead = styled.thead``;

export const StandingsTBody = styled.tbody``;

export const StandingsTH = styled.th`
  padding: 5px;
  white-space: nowrap;
  text-align: center;
  border-right: 1px solid;
  border-bottom: 1px solid;
  font-size: 1.3rem;
  height: 40px;
`;
export const StandingsTD = styled.td`
  padding: 5px;
  white-space: nowrap;
  text-align: center;
  border-right: 1px solid;
  border-bottom: 1px solid;
`;

export const StandingsTR = styled.tr``;

interface LetterT {
  letter: string;
}

export const FormLetter = styled.span`
  color: ${(props: LetterT) => (props.letter === "W" ? "inherit" : "red")};
`;

export const TeamLogo = styled.img`
  width: 40px;
  height: 40px;
`;
