import styled from "styled-components";

export const LeagueInfo = styled.div`
  background-color: #37003c;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LargerWidgets = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid;
  border-radius: 10px;
  min-height: 200px;

  @media screen and (max-width: 800px) {
    width: 100%;
    border: none;
  }
`;

interface PropsT {
  numberOfTeams: number;
}

export const SmallerWidgets = styled.div`
  height: ${({ numberOfTeams }: PropsT) =>
    `${1 + 51 * (numberOfTeams + 1) + (75 + numberOfTeams * 4)}px`};
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 200px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 1320px;
  }
`;
