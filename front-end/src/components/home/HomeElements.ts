import { animated } from "react-spring";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const HomeWrapper = styled.div`
  display: flex;
  width: 85%;
  min-height: calc(100vh - 80px);
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const HomeWelcomeText = styled(animated.h1)`
  width: 100%;
  text-align: center;
`;

export const HomeH2 = styled.h2`
  width: 100%;
`;

export const HomeForm = styled(animated.form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
