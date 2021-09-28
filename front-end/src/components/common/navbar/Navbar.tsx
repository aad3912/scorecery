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
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const loggedIn = localStorage.getItem("authToken");
  const logOut = (logOut: string | null) => {
    if (logOut) {
      localStorage.removeItem("authToken");
    }
  };
  console.log(showSidebar);
  return (
    <>
      <Sidebar show={showSidebar} setShow={setShowSidebar} />
      <NavContainer>
        <NavWrapper>
          <LogoAndNameContainer to={loggedIn ? "/leagues" : "/"}>
            <Logo src={MyLogo} alt="/" />
            <CompanyName>SC</CompanyName>
          </LogoAndNameContainer>
          <Bars size={35} onClick={() => setShowSidebar((prev) => !prev)} />
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
    </>
  );
};
export default Navbar;
