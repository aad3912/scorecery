import { FormEvent, useContext, useState } from "react";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";
import LeaguesSelector from "../components/widgets/leagues-select/LeaguesSelector";
import AuthContext from "../context/AuthContext";
import { FormButton, FormError } from "../components/common/FormElements";
import axios from "axios";
import { RouterProps } from "react-router";
import {
  HomeContainer,
  HomeWrapper,
  HomeWelcomeText,
  HomeForm,
  HomeH2,
} from "../components/home/HomeElements";
import { config, useChain, useSpring, useSpringRef } from "@react-spring/core";

const Home = ({ history }: RouterProps) => {
  const [selectedLeagues, setSelectedLeagues] = useState<SelectOption[]>([]);
  const { userState, userDispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emptyError = () => setTimeout(() => setError(""), 5000);

  const addLeagues = async () => {
    const mappedToLeagueDataT: LeagueDataT[] = selectedLeagues.map((league) => {
      return { _id: league.value, name: league.label.split(/ \[/)[0] };
    });
    try {
      await axios.post(
        "/api/leagues/add",
        { leagues: mappedToLeagueDataT },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      userDispatch({ type: "ADD_LEAGUES", payload: mappedToLeagueDataT });
      setLoading(false);
      history.push("/leagues");
    } catch (e) {
      const error = (e as ErrorResponseType).response.data.error;
      setError(error);
      setLoading(false);
      return emptyError();
    }
  };

  const onSubmitForm = (e: FormEvent, f: () => void) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      f();
    } else {
      setError("Please wait for previous operation to finish...");
      return emptyError();
    }
  };

  const welcomeTextRef = useSpringRef();
  const x = useSpring({
    ref: welcomeTextRef,
    config: { duration: 1500 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useChain([welcomeTextRef], [0]);
  // , show ? [0, 0.25, 0.75, 1.25] : [0, 0.5, 1, 1.5]);

  return (
    <>
      <Navbar />
      <HomeContainer>
        <HomeWrapper>
          <HomeWelcomeText style={x}>
            Welcome, {userState.username}
          </HomeWelcomeText>
          <HomeForm onSubmit={(e) => onSubmitForm(e, addLeagues)}>
            <FormError show={error}>{error}</FormError>
            <HomeH2>Add Leagues</HomeH2>
            <LeaguesSelector setSelectedLeagues={setSelectedLeagues} />
            <FormButton type="submit">
              {loading ? "Adding Leagues..." : "Add"}
            </FormButton>
          </HomeForm>
        </HomeWrapper>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
