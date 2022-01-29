import styled from "styled-components";

export const InnerSlider = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: #00f783 transparent;
  gap: 20px;

  @media screen and (max-width: 800px) {
    gap: 10px;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  padding: 20px;
`;
