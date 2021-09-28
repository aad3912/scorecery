import styled from "styled-components";
import { animated } from "react-spring";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SidebarContainer = styled(animated.div)`
  position: fixed;
  overflow: hidden;
  top: 0;
  bottom: 0;
  background: #37003c;
  z-index: 100;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const SidebarWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  gap: 10px;
  align-items: center;
`;

export const CloseIconDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 80px;
  align-items: center;
`;

export const SidebarCloseIcon = styled(AiFillCloseSquare)`
  display: none;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 800px) {
    display: block;
    cursor: pointer;
    margin: 0px;
    padding: 0px;
    width: 40px;
    transition: 0.3s all ease;
  }

  &:active,
  &:hover {
    transform: rotate(90deg);
    color: #37003c;
    background: #00f783;
  }
`;
export const SidebarLink = styled(Link)`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease-in-out;

  &:active,
  &:hover {
    background: #00f783;
    color: #37003c;
  }

  @media screen and (max-width: 800px) {
    transition: 0.05s all ease;
  }
`;

export const SiderbarButton = styled.div`
  width: 80%;
  background: #00f783;
  color: #37003c;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.2s all ease-in-out;

  &:hover,
  &:active {
    color: white;
  }

  @media screen and (max-width: 800px) {
    transition: 0.05s all ease;
  }
`;
