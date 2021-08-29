import styled from "styled-components";

interface ButtonPropsT {
  width?: numInPx;
  height: numInPx;
  bgColor: string;
  color: string;
  borderRadius: numInPx | numInPct;
  largeFont?: boolean;
}

const Button = styled.button`
  width: ${(props: ButtonPropsT) => (props.width ? props.width : "auto")};
  height: ${(props: ButtonPropsT) => props.height};
  background-color: ${(props: ButtonPropsT) => props.bgColor};
  color: ${(props: ButtonPropsT) => props.color};
  border: 1px solid ${(props: ButtonPropsT) => props.color};
  border-radius: ${(props) => props.borderRadius};
  text-decoration: none;
  font-size: ${(props: ButtonPropsT) => (props.largeFont ? "1.5rem" : "1rem")};
  padding: 7px 14px 7px 14px;
  cursor: pointer;
  transition: 0.2s all ease-in;

  &:hover {
    border: 1px solid ${(props: ButtonPropsT) => props.bgColor};
    color: ${(props: ButtonPropsT) => props.bgColor};
    background-color: ${(props: ButtonPropsT) => props.color};
  }
`;

export default Button;
