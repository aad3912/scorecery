import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: #37003c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  z-index: 10;
`;

export const FooterWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px 0px;

  @media screen and (max-width: 800px) {
    width: 90%;
    gap: 20px;
  }
`;

export const FooterLogoAndName = styled(LinkR)`
  text-decoration: none;
  color: inherit;
  position: relative;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const FooterCompanyName = styled.h1`
  font-size: 2rem;
`;

export const FooterLogo = styled.img`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0;
  left: -45px;

  @media screen and (max-width: 800px) {
    position: relative;
    left: 0;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
`;

export const FooterLink = styled(LinkR)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  outline: none;
  border: none;
  transition: 0.15s all ease-in-out;
  font-weight: normal;

  &:hover {
    color: inherit;
  }
`;

export const FooterLastLink = styled(LinkR)`
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  outline: none;
  border: none;
  transition: 0.15s all ease-in-out;
  font-weight: normal;

  &:hover {
    text-decoration: underline;
  }
`;
