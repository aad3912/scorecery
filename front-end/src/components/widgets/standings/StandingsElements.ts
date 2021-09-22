import styled from "styled-components";

export const StandingsContainer = styled.div`
  width: 100%;
  overflow: scroll;
  scrollbar-color: #00f783 transparent;
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 1rem;
`;

export const StandingsH1 = styled.h1``;

export const StandingsTable = styled.table`
  border-collapse: collapse;
  font-size: 1rem;
`;

export const StandingsTHead = styled.thead``;

export const StandingsTBody = styled.tbody``;

export const StandingsTH = styled.th`
  padding: 5px;
  white-space: nowrap;
  text-align: center;
  border-right: 2px solid;
  font-size: 1.3rem;
`;
export const StandingsTD = styled.td`
  padding: 5px;
  white-space: nowrap;
  text-align: center;
  border-right: 2px solid;
`;

export const StandingsTR = styled.tr`
  border: 2px solid;
`;

export const TeamLogo = styled.img`
  width: 40px;
  height: 40px;
`;
