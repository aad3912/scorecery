import {
  CloseIconDiv,
  SidebarCloseIcon,
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SiderbarButton,
} from "./SidebarElements";
import {
  useTransition,
  config,
  useChain,
  useSpringRef,
  useSpring,
} from "react-spring";

interface PropsT {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ show, setShow }: PropsT) => {
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
        <SidebarLink to="/leagues">Leagues</SidebarLink>
        <SidebarLink to="/cups">Cups</SidebarLink>
        <SidebarLink to="/players">Players</SidebarLink>
        <SidebarLink to="/teams">Teams</SidebarLink>
        <SiderbarButton>Log In</SiderbarButton>
        <SiderbarButton>Sign up</SiderbarButton>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
