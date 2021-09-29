import { useContext, useState } from "react";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";
import LeaguesSelector from "../components/widgets/leagues-select/LeaguesSelector";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const [selectedLeagues, setSelectedLeagues] = useState<SelectOption[]>([]);
  const { userState } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      {userState.username}
      <LeaguesSelector
        selectedLeagues={selectedLeagues}
        setSelectedLeagues={setSelectedLeagues}
      />
      <Footer />
    </>
  );
};

export default Home;
