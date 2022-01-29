import styled from "styled-components";

interface PropsT {
  smallFont?: boolean;
}

const Loading = styled.div`
  text-align: center;
  font-size: ${(props: PropsT) => (props.smallFont ? "2rem" : "3rem")};
`;

export default Loading;
