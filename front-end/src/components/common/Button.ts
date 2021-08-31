import styled from "styled-components";

interface ButtonPropsT {
  height: numInPx;
  bgColor: string;
  color: string;
  borderRadius: numInPx | numInPct;
  largeFont?: boolean;
  border?: boolean;
  display?: string;
}

const Button = styled.button`
  min-width: max-content;
  height: ${({ height }: ButtonPropsT) => height};
  background-color: ${({ bgColor }: ButtonPropsT) => bgColor};
  color: ${({ color }: ButtonPropsT) => color};
  border: 3px solid
    ${({ border, color, bgColor }: ButtonPropsT) => (border ? color : bgColor)};
  border-radius: 10px;
  text-decoration: none;
  font-size: ${({ largeFont }: ButtonPropsT) =>
    largeFont ? "1.3rem" : "1rem"};
  padding: 7px 14px 7px 14px;
  cursor: pointer;
  transition: 0.2s all ease-in;
  font-weight: bold;
  text-align: center;

  &:hover {
    border: 3px solid
      ${(props: ButtonPropsT) => (props.border ? props.bgColor : props.color)};
    color: ${(props: ButtonPropsT) => props.bgColor};
    background-color: ${(props: ButtonPropsT) => props.color};
  }
`;

export default Button;
