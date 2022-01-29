import styled from "styled-components";

export const FormGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 10px;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 800px) {
    gap: 5px;
  }
`;

export const Input = styled.input`
  outline-width: none;
  border-radius: 0px;
  height: 40px;
  text-align: center;
  font-size: 1rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 5px;
    text-align: left;
  }
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;

  @media screen and (max-width: 800px) {
    text-align: left;
  }
`;
