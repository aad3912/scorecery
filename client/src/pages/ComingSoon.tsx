import styled from "styled-components";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";

const ComingSoonDiv = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  text-align: center;
`;

const ComingSoon = () => {
  return (
    <>
      <Navbar />
      <ComingSoonDiv>Coming Soon...</ComingSoonDiv>
      <Footer />
    </>
  );
};

export default ComingSoon;
