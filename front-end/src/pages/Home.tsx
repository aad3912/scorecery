import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import LeagueBox from "../components/leagues/LeagueBox";
import { getFromApi } from "../components/common/constants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getLeagues = () => {
  const params: LeagueParamsT = {
    current: "true",
    code: "GB",
  };

  getFromApi("/leagues", params);
};

const Home = () => {
  return (
    <>
      <Navbar />
      <LeagueBox />
      <Footer />
    </>
  );
};

export default Home;
