import styled from "styled-components";

interface PropsT {
  justifyCenter: boolean;
}

export const ResultsContainer = styled.div`
  width: 47%;
  overflow: scroll;
  scrollbar-color: #00f783 transparent;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1rem;
  padding: 10px;
  border-radius: 10px;
  justify-content: ${(props: PropsT) =>
    props.justifyCenter ? "center" : "inherit"};

  @media screen and (max-width: 800px) {
    border: none;
    width: 100%;
    height: 47%;
  }
`;

export const ResultsH1 = styled.h1``;

export const ResultsTable = styled.table`
  font-size: 1rem;
  border: 1px solid;
  border-collapse: collapse;
`;

export const ResultsTHead = styled.thead``;

export const ResultsTH = styled.th`
  font-size: 1.3rem;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid;
  border-right: 1px solid;
`;

export const ResultsTBody = styled.tbody``;

export const ResultsTD = styled.td`
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid;
  border-right: 1px solid;
`;

export const ResultsTR = styled.tr``;
