import styled from "styled-components";

export default styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: #00f783 transparent;
  gap: 20px;
  padding: 20px 0;

  @media screen and (max-width: 800px) {
    gap: 10px;
  }
`;
