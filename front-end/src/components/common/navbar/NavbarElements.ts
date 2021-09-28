import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #37003c;
  font-size: 1rem;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavWrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const LogoAndNameContainer = styled(LinkR)`
  text-decoration: none;
  color: inherit;
  height: 75%;
  display: flex;
  justify-self: flex-start;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    height: 85%;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 80%;
`;

export const CompanyName = styled.h1``;

export const NavLinksContainer = styled.div`
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavLink = styled(LinkR)`
  font-size: 1.3rem;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  height: 100%;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    color: #37003c;
    background-color: #00f783;
  }
`;

export const ButtonLink = styled(LinkR)`
  font-size: 1.3rem;
  text-decoration: none;
  color: #37003c;
  background-color: #00f783;
  height: 100%;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #00f783;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    color: #00f783;
    background-color: #37003c;
  }
`;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    cursor: pointer;
    margin: 0px;
    padding: 0px;
    height: 100%;
  }
`;
