import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/common/navbar/Navbar";
import Logo from "../img/logo512.png";

export const LandingPage = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  gap: 30px;
`;

export const LandingH1 = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

export const LandingImage = styled.img`
  height: 20vh;
  width: auto;
`;

export const LandingButtonsContainer = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const LandingLink = styled(Link)`
  text-decoration: none;
  border-radius: 10px;
  border: none;
  width: 300px;
  padding: 15px 30px;
  color: inherit;
  font-size: 1.5rem;
  background: #37003c;
  text-align: center;
  border: 3px solid #00f783;

  &:hover,
  &:focus,
  &:active {
    background: #00f783;
    color: #37003c;
    border: 3px solid #37003c;
  }
`;

const Landing = () => {
  return (
    <>
      <Navbar />
      <LandingPage>
        <LandingImage src={Logo} alt="logo" />
        <LandingH1>Scorecery</LandingH1>
        <LandingButtonsContainer>
          <LandingLink to="/register">Sign up</LandingLink>
          <LandingLink to="/login">Log in</LandingLink>
        </LandingButtonsContainer>
      </LandingPage>
    </>
  );
};

export default Landing;
