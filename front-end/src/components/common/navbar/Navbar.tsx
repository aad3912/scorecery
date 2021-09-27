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

const Navbar = () => {
  const loggedIn = localStorage.getItem("authToken");
  const logOut = (logOut: string | null) => {
    if (logOut) {
      localStorage.removeItem("authToken");
    }
  };
  return (
    <NavContainer>
      <NavWrapper>
        <LogoAndNameContainer to={loggedIn ? "/leagues" : "/"}>
          <Logo src={MyLogo} alt="/" />
          <CompanyName>SC</CompanyName>
        </LogoAndNameContainer>
        <Bars />
        <NavLinksContainer>
          <NavLink to="/leagues">Leagues</NavLink>
          <NavLink to="/cups">Cups</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/players">Players</NavLink>
        </NavLinksContainer>
        <NavLinksContainer>
          <ButtonLink
            to={loggedIn ? "/" : "/register"}
            onClick={() => logOut(loggedIn)}
          >
            {loggedIn ? "Sign Out" : "Sign Up"}
          </ButtonLink>
        </NavLinksContainer>
      </NavWrapper>
    </NavContainer>
  );
};
export default Navbar;
