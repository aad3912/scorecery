import styled from "styled-components";

export const LeagueInfo = styled.div`
  background-color: #37003c;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: center;
  /* Uncomment following for center vertical align for each grid cell */
  /* align-items: center; */

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SmallerWidgets = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  /* Comment following to remove center vertical align for each grid cell */
  align-items: center;
  border-collapse: collapse;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
`;
