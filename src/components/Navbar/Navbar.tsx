import {
  Logo,
  LogoAndNameContainer,
  NavContainer,
  NavWrapper,
  CompanyName,
} from "./NavbarElements";
import MyLogo from "../../img/logo512.png";

const Navbar = () => (
  <NavContainer>
    <NavWrapper>
      <LogoAndNameContainer>
        <Logo src={MyLogo} alt="/" />
        <CompanyName>Name</CompanyName>
      </LogoAndNameContainer>
    </NavWrapper>
  </NavContainer>
);

export default Navbar;
