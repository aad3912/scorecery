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
import { useContext, useState } from "react";
import AuthContext from "../../../context/AuthContext";

export const logOut = (
  isAuth: boolean,
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (isAuth) {
    setIsAuth(false);
    localStorage.removeItem("authToken");
  }
};

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [showSidebar, setShowSidebar] = useState(false);
  const loggedIn = localStorage.getItem("authToken");
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
              to={isAuth ? "/" : "/register"}
              onClick={() => logOut(isAuth, setIsAuth)}
            >
              {isAuth ? "Sign Out" : "Sign Up"}
            </ButtonLink>
          </NavLinksContainer>
        </NavWrapper>
      </NavContainer>
    </>
  );
};
export default Navbar;
