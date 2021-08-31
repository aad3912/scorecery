import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import LeagueBox from "../components/leagues/LeagueBox";
import axios from "axios";

type LocationT = `/${string}`;
type LeagueParamsT = {
  current: "true" | "false";
  code: string;
};

const getFromApi = async (location: LocationT, parameters: GetParamsT) => {
  try {
    const url = `https://v3.football.api-sports.io${location}`;
    const data = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "622f1c14d13856fcee43a87199dcc759",
      },
      params: parameters,
    });
    console.log(data);
  } catch (error) {
    alert(error);
  }
};

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
