import Button from "../components/common/Button";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";

const Home = () => {
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

  const getLeagues = () => {
    const params: LeagueParamsT = {
      current: "true",
      code: "GB",
    };

    getFromApi("/leagues", params);
  };

  return (
    <>
      <Navbar />
      <Button
        height="50px"
        bgColor="#37003c"
        color="#00f783"
        borderRadius="20px"
        onClick={getLeagues}
      >
        Get list of Leagues
      </Button>
    </>
  );
};

export default Home;
