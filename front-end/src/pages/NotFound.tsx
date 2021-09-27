import styled from "styled-components";

const NotFoundDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-size: 3rem;
  text-align: center;
`;

const NotFound = () => {
  return <NotFoundDiv>ERROR 404: Not found</NotFoundDiv>;
};

export default NotFound;
