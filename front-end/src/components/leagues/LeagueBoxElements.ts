import styled from "styled-components";

export const LeagueBoxContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  min-height: calc(100vh - 80px);
`;

export const LeagueBoxWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
