/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useContext, useEffect, useState } from "react";
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
import { getAuthHeader, getFromApi } from "../components/common/constants";
// import { config, useChain, useSpring, useSpringRef } from "@react-spring/core";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummyLeagues: SelectOption[] = [
  { label: "Premier League", value: 39 },
  { label: "Ligue 1", value: 61 },
  { label: "Bundesliga 1", value: 78 },
  { label: "Primera Division", value: 140 },
];

const Home = ({ history }: RouterProps) => {
  const { userState, userDispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [addOptionsL, setAddOptionsL] = useState<SelectOption[]>([]);
  const [toBeAddedL, setToBeAddedL] = useState<SelectOption[]>([]);

  const emptyError = () => setTimeout(() => setError(""), 5000);

  useEffect(() => {
    async function getLeagues() {
      // const params: LeagueParamsT = { current: "true" };
      // const result = (await getFromApi(
      //   "/leagues",
      //   params
      // )) as LeaguesResponseT[];
      // const leagueSet = new Set(userState.leagues.map((league) => league._id));
      // setAddOptionsL(
      //   result
      //     .filter(
      //       (match) =>
      //         !leagueSet.has(match.league.id) && match.league.type === "League"
      //     )
      //     .map((match) => {
      //       return {
      //         label: `${match.league.name} [${match.country.name}]`,
      //         value: match.league.id,
      //       };
      //     })
      // );
      setAddOptionsL(dummyLeagues);
    }
    getLeagues();
  }, [userState.leagues]);

  const addLeagues = async () => {
    try {
      const mappedToLeagueData = toBeAddedL.map((match) => {
        return { _id: match.value, name: match.label.split(/ \[/)[0] };
      });
      await axios.post(
        "/api/leagues/add",
        { leagues: mappedToLeagueData },
        { headers: { Authorization: getAuthHeader() } }
      );
      userDispatch({ type: "ADD_LEAGUES", payload: mappedToLeagueData });
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

  // const welcomeTextRef = useSpringRef();
  // const x = useSpring({
  //   ref: welcomeTextRef,
  //   config: { duration: 1500 },
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  // });

  // useChain([welcomeTextRef], [0]);
  // , show ? [0, 0.25, 0.75, 1.25] : [0, 0.5, 1, 1.5]);

  return (
    <>
      <Navbar />
      <HomeContainer>
        <HomeWrapper>
          <HomeWelcomeText>Welcome, {userState.username}</HomeWelcomeText>
          <HomeForm onSubmit={(e) => onSubmitForm(e, addLeagues)}>
            <FormError show={error}>{error}</FormError>
            <HomeH2>Add Leagues</HomeH2>
            <LeaguesSelector options={addOptionsL} setter={setToBeAddedL} />
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
