import {
  CloseIconDiv,
  SidebarCloseIcon,
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SidebarButtonLink,
} from "./SidebarElements";
import {
  useTransition,
  config,
  useChain,
  useSpringRef,
  useSpring,
  animated,
} from "react-spring";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { logOut } from "../navbar/Navbar";

const AnimatedSidebarLink = animated(SidebarLink);
const AnimatedSidebarButtonLink = animated(SidebarButtonLink);

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

  const items = [
    { text: "Leagues", link: "/leagues" },
    { text: "Cups", link: "/cups" },
    { text: "Teams", link: "/teams" },
    { text: "Players", link: "/players" },
  ];
  const itemsRef = useSpringRef();
  const itemsTransition = useTransition(show ? items : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
    config: config.wobbly,
    trail: 100,
    unique: true,
    ref: itemsRef,
  });

  const buttonsLoggedOut = [
    { text: "Log in", link: "/login", onClick: () => setShow(false) },
    { text: "Sign up", link: "/register", onClick: () => setShow(false) },
  ];
  const buttonsLoggedIn = [
    {
      text: "Log out",
      link: "/",
      onClick: () => {
        setShow(false);
        logOut(isAuth, setIsAuth);
      },
    },
  ];
  const buttonsRef = useSpringRef();
  const buttonsTransition = useTransition(
    show ? (isAuth ? buttonsLoggedIn : buttonsLoggedOut) : [],
    {
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      leave: { opacity: 0, scale: 0 },
      config: config.wobbly,
      trail: 100,
      unique: true,
      ref: buttonsRef,
    }
  );

  const closeRef = useSpringRef();
  const closeTransition = useTransition(show ? [0] : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
    config: config.slow,
    trail: 100,
    unique: true,
    ref: closeRef,
  });

  useChain(
    show
      ? [sidebarRef, closeRef, itemsRef, buttonsRef]
      : [buttonsRef, itemsRef, closeRef, sidebarRef],
    show ? [0, 0.25, 0.75, 1.25] : [0, 0.5, 1, 1.5]
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
        {closeTransition((style, _item) => (
          <CloseIconDiv style={style}>
            <SidebarCloseIcon onClick={() => setShow(false)} size={35} />
          </CloseIconDiv>
        ))}

        {itemsTransition((style, item) => (
          <AnimatedSidebarLink
            style={style}
            onClick={() => setShow(false)}
            to={item.link}
          >
            {item.text}
          </AnimatedSidebarLink>
        ))}
        {buttonsTransition((style, item) => (
          <AnimatedSidebarButtonLink
            style={style}
            onClick={item.onClick}
            to={item.link}
          >
            {item.text}
          </AnimatedSidebarButtonLink>
        ))}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
