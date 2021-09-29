import { FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";
import LeaguesSelector from "../components/widgets/leagues-select/LeaguesSelector";
import AuthContext from "../context/AuthContext";
import { animated } from "react-spring";
import { FormButton, FormError } from "../components/common/FormElements";
import axios from "axios";
import { RouterProps } from "react-router";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const HomeWrapper = styled.div`
  display: flex;
  width: 85%;
  min-height: calc(100vh - 80px);
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const HomeWelcomeText = styled(animated.h1)`
  width: 100%;
  text-align: center;
`;

export const HomeH2 = styled.h2`
  width: 100%;
`;

export const HomeForm = styled(animated.form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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
  return (
    <>
      <Navbar />
      <HomeContainer>
        <HomeWrapper>
          <HomeWelcomeText>Welcome, {userState.username}</HomeWelcomeText>
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
