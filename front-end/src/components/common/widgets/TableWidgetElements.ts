import styled from "styled-components";

export const StandingsContainer = styled.div`
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  scrollbar-color: #00f783 transparent;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const TeamInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow-x: scroll;
  white-space: nowrap;
  scrollbar-width: none;
  gap: 20px;
`;
