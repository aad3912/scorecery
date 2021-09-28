import {
  CloseIconDiv,
  SidebarCloseIcon,
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SiderbarButtonLink,
} from "./SidebarElements";
import {
  useTransition,
  config,
  useChain,
  useSpringRef,
  useSpring,
} from "react-spring";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { logOut } from "../navbar/Navbar";

interface PropsT {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ show, setShow }: PropsT) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const sidebarRef = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: sidebarRef,
    config: config.slow,
    from: { size: "0%" },
    to: {
      size: show ? "100%" : "0%",
    },
  });

  const items = ["Leagues", "Cups", "Players", "Teams"];
  const itemsRef = useSpringRef();
  const itemsTransition = useTransition(show ? items : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
    // TODO: Try Other configs
    config: config.wobbly,
    // TODO: What does this do?
    trail: 100,
    unique: true,
    ref: itemsRef,
  });

  useChain(
    show ? [sidebarRef, itemsRef] : [itemsRef, sidebarRef]
    // show ? [0, 0.25] : [0, 0.6]
  );

  return (
    <SidebarContainer
      style={{
        ...rest,
        width: "100%",
        height: size,
      }}
    >
      <SidebarWrapper>
        <CloseIconDiv>
          <SidebarCloseIcon
            onClick={() => setShow((prev) => !prev)}
            size={35}
          />
        </CloseIconDiv>
        <SidebarLink onClick={() => setShow(false)} to="/leagues">
          Leagues
        </SidebarLink>
        <SidebarLink onClick={() => setShow(false)} to="/cups">
          Cups
        </SidebarLink>
        <SidebarLink onClick={() => setShow(false)} to="/players">
          Players
        </SidebarLink>
        <SidebarLink onClick={() => setShow(false)} to="/teams">
          Teams
        </SidebarLink>
        <SiderbarButtonLink
          onClick={() => logOut(isAuth, setIsAuth)}
          to={isAuth ? "/" : "/leagues"}
        >
          Log {isAuth ? "Out" : "In"}
        </SiderbarButtonLink>
        {!isAuth && (
          <SiderbarButtonLink to="/register">Sign up</SiderbarButtonLink>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
