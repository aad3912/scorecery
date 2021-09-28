import styled from "styled-components";

interface PropsT {
  justifyCenter: boolean;
}

export const DisplayContainer = styled.div`
  height: 50%;
  width: 100%;
  font-size: 1rem;
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    border: none;
  }
`;

export const DisplayWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: ${(props: PropsT) =>
    props.justifyCenter ? "center" : "inherit"};
`;

export const DisplayTableWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  scrollbar-color: #00f783 transparent;
`;

export const DisplayH1 = styled.h1`
  text-align: center;
`;

export const DisplayTable = styled.table`
  width: 100%;
  font-size: 1rem;
  border: 1px solid white;
  border-collapse: collapse;
`;

export const DisplayTHead = styled.thead``;

export const DisplayTH = styled.th`
  font-size: 1.3rem;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
`;

export const DisplayTBody = styled.tbody``;

export const DisplayTD = styled.td`
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
`;

export const DisplayTR = styled.tr``;
