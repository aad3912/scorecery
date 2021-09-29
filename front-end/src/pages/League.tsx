/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import LeagueBox from "../components/leagues/LeagueBox";
import { getFromApi } from "../components/common/constants";

const League = () => {
  return (
    <>
      <Navbar />
      <LeagueBox />
      <Footer />
    </>
  );
};

export default League;
