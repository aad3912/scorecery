import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormButton = styled.button`
  width: 100%;
  height: 40px;
  color: #37003c;
  background-color: white;
  text-decoration: none;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.2s all ease-in;
  font-weight: bold;
  text-align: center;
  border: none;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    transition: 0.05s all ease;
  }

  &:hover,
  &:active,
  &:focus {
    color: #37003c;
    background-color: #00f783;
  }
`;

export const FormSpan = styled.span`
  width: 100%;
  text-align: center;
  color: white;
`;

export const FormLink = styled(Link)`
  text-decoration: underline;
  color: white;
  transition: 0.2s all ease-in;

  @media screen and (max-width: 800px) {
    transition: 0.05s all ease;
  }

  &:hover,
  &:active,
  &:focus {
    color: #00f783;
  }
`;

export const FormH1 = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`;

interface PropsT {
  show: string;
}

export const FormError = styled.span`
  width: 100%;
  font-size: 1.3rem;
  background: red;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${(props: PropsT) => (props.show ? "40px" : "0px")};
  transition: height 0.1s ease-in-out;
  margin-bottom: ${(props: PropsT) => (props.show ? "30px" : "0px")};
`;
