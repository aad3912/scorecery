import styled from "styled-components";

interface ButtonPropsT {
  width?: numInPx;
  height: numInPx;
  bgColor: string;
  color: string;
  borderRadius: numInPx | numInPct;
  largeFont?: boolean;
  border?: boolean;
}

const Button = styled.button`
  min-width: max-content;
  height: ${(props: ButtonPropsT) => props.height};
  background-color: ${(props: ButtonPropsT) => props.bgColor};
  color: ${(props: ButtonPropsT) => props.color};
  border: 3px solid
    ${(props: ButtonPropsT) => (props.border ? props.color : props.bgColor)};
  border-radius: ${(props) => props.borderRadius};
  text-decoration: none;
  font-size: ${(props: ButtonPropsT) => (props.largeFont ? "1.5rem" : "1rem")};
  padding: 7px 14px 7px 14px;
  cursor: pointer;
  transition: 0.2s all ease-in;
  font-weight: bold;

  &:hover {
    border: 3px solid
      ${(props: ButtonPropsT) => (props.border ? props.bgColor : props.color)};
    color: ${(props: ButtonPropsT) => props.bgColor};
    background-color: ${(props: ButtonPropsT) => props.color};
  }
`;

export default Button;
