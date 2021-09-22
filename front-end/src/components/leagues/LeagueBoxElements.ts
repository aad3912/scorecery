import styled from "styled-components";

export const LeagueBoxContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  //remove this later
`;

export const LeagueBoxWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
