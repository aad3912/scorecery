import styled from "styled-components";

export const LeagueInfo = styled.div`
  background-color: #37003c;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const SmallerWidgets = styled.div`
  max-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
    padding: 0px;
  }
`;
