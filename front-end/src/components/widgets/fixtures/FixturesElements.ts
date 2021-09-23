import styled from "styled-components";

export const FixturesContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid;
  border-top: 1px solid;
  overflow: scroll;
  scrollbar-color: #00f783 transparent;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1rem;
  padding: 10px;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    border: none;
  }
`;

export const FixturesH1 = styled.h1``;
