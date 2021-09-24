import styled from "styled-components";

interface PropsT {
  justifyCenter: boolean;
}

export const ResultsContainer = styled.div`
  height: 50%;
  width: 100%;
  overflow: scroll;
  scrollbar-color: #00f783 transparent;
  font-size: 1rem;
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
`;

export const ResultsWrapper = styled.div`
  width: 100%;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: ${(props: PropsT) =>
    props.justifyCenter ? "center" : "inherit"};
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
