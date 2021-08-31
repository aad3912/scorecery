import {
  Bars,
  ButtonLink,
  CompanyName,
  Logo,
  LogoAndNameContainer,
  NavContainer,
  NavLink,
  NavLinksContainer,
  NavWrapper,
} from "./NavbarElements";
import MyLogo from "../../../img/logo512.png";

const Navbar = () => (
  <NavContainer>
    <NavWrapper>
      <LogoAndNameContainer to="/">
        <Logo src={MyLogo} alt="/" />
        <CompanyName>SC</CompanyName>
      </LogoAndNameContainer>
      <Bars />
      <NavLinksContainer>
        <NavLink to="/">Leagues</NavLink>
        <NavLink to="/">Cups</NavLink>
        <NavLink to="/">Teams</NavLink>
        <NavLink to="/">Players</NavLink>
      </NavLinksContainer>
      <NavLinksContainer>
        <ButtonLink to="/">Sign Up</ButtonLink>
      </NavLinksContainer>
    </NavWrapper>
  </NavContainer>
);

export default Navbar;
