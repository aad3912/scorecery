import {
  FooterCompanyName,
  FooterContainer,
  FooterLink,
  FooterLastLink,
  FooterLogo,
  FooterLogoAndName,
  FooterWrapper,
  LinksColumn,
  LinksContainer,
} from "./FooterElements";
import MyLogo from "../../../img/logo512.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogoAndName to="/">
          <FooterCompanyName>Scorecery</FooterCompanyName>
          <FooterLogo src={MyLogo} alt="/" />
        </FooterLogoAndName>
        <LinksContainer>
          <LinksColumn>
            LEAGUES
            <FooterLink to="/">Premier League</FooterLink>
            <FooterLink to="/">Bundesliga</FooterLink>
            <FooterLink to="/">League 1</FooterLink>
            <FooterLink to="/">LaLiga</FooterLink>
            <FooterLastLink to="/">View All</FooterLastLink>
          </LinksColumn>
          <LinksColumn>
            TEAMS
            <FooterLink to="/">Arsenal</FooterLink>
            <FooterLink to="/">Manchester United</FooterLink>
            <FooterLink to="/">Chelsea</FooterLink>
            <FooterLastLink to="/">View All</FooterLastLink>
          </LinksColumn>
          <LinksColumn>
            PLAYERS
            <FooterLink to="/">Lionel Messi</FooterLink>
            <FooterLink to="/">Pierre-Emerick Aubameyang</FooterLink>
            <FooterLink to="/">Christiano Ronaldo</FooterLink>
            <FooterLink to="/">Bukayo Saka</FooterLink>
            <FooterLastLink to="/">View All</FooterLastLink>
          </LinksColumn>
          <LinksColumn>
            PLAYERS
            <FooterLink to="/">Lionel Messi</FooterLink>
            <FooterLink to="/">Pierre-Emerick Aubameyang</FooterLink>
            <FooterLink to="/">Christiano Ronaldo</FooterLink>
            <FooterLink to="/">Bukayo Saka</FooterLink>
            <FooterLastLink to="/">View All</FooterLastLink>
          </LinksColumn>
        </LinksContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
