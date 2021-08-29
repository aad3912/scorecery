import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  /* margin-top: -80px; */
  background-color: #37003c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoAndNameContainer = styled.div`
  height: 80px;
  display: flex;
  justify-self: flex-start;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export const CompanyName = styled.h1`
  font-size: 2rem;
  font-weight: normal;
`;
