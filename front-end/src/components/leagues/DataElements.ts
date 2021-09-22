import styled from "styled-components";

export const LeagueInfo = styled.div`
  background-color: #37003c;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
  /* Uncomment following for center vertical align for each grid cell */
  /* align-items: center; */

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
