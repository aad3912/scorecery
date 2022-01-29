/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useContext, useEffect, useState } from "react";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";
import {
  LeaguesSelector,
  LeaguesSelectorMulti,
} from "../components/widgets/leagues-select/LeaguesSelector";
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
import {
  emptyError,
  getAuthHeader,
  getFromApi,
} from "../components/common/constants";
import dummyLeagues from "../components/dummy/DummyLeagues";
import { useChain, useSpring, useSpringRef } from "react-spring";

const Home = ({ history }: RouterProps) => {
  const { userState, userDispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [addOptionsL, setAddOptionsL] = useState<SelectOption[]>([]);
  const [toBeAddedL, setToBeAddedL] = useState<SelectOption[]>([]);
  const [toBeRemovedL, setToBeRemovedL] = useState<SelectOption>({
    label: "none",
    value: -1,
  });

  useEffect(() => {
    async function getLeagues() {
      const params: LeagueParamsT = { current: "true" };
      const result = (await getFromApi(
        "/leagues",
        params
      )) as LeaguesResponseT[];
      const leagueSet = new Set(userState.leagues.map((league) => league._id));
      setAddOptionsL(
        result
          .filter(
            (match) =>
              !leagueSet.has(match.league.id) && match.league.type === "League"
          )
          .map((match) => {
            return {
              label: `${match.league.name} [${match.country.name}]`,
              value: match.league.id,
            };
          })
      );
      // setAddOptionsL(dummyLeagues);
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
      return emptyError(setError);
    }
  };

  const removeLeagues = async () => {
    try {
      await axios.post(
        "/api/leagues/remove",
        { leagueId: toBeRemovedL.value },
        { headers: { Authorization: getAuthHeader() } }
      );
      userDispatch({
        type: "REMOVE_LEAGUE",
        payload: { name: toBeRemovedL.label, _id: toBeRemovedL.value },
      });
      setLoading(false);
      history.push("/leagues");
    } catch (e) {
      const error = (e as ErrorResponseType).response.data.error;
      setError(error);
      setLoading(false);
      return emptyError(setError);
    }
  };

  const onSubmitForm = (e: FormEvent, f: () => void) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      f();
    } else {
      setError("Please wait for previous operation to finish...");
      return emptyError(setError);
    }
  };

  const welcomeTextRef = useSpringRef();
  const welcomeTextStyle = useSpring({
    ref: welcomeTextRef,
    config: { duration: 1000 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const addLeaguesRef = useSpringRef();
  const addLeagueStyle = useSpring({
    ref: addLeaguesRef,
    config: { duration: 500 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const removeLeaguesRef = useSpringRef();
  const removeLeagueStyle = useSpring({
    ref: removeLeaguesRef,
    config: { duration: 500 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useChain([welcomeTextRef, addLeaguesRef, removeLeaguesRef], [0, 0.5, 0.5]);

  return (
    <>
      <Navbar />
      <HomeContainer>
        <HomeWrapper>
          <HomeWelcomeText style={{ ...welcomeTextStyle }}>
            Welcome, {userState.username}
          </HomeWelcomeText>
          <FormError show={error}>{error}</FormError>
          <HomeForm
            style={{ ...addLeagueStyle }}
            onSubmit={(e) => onSubmitForm(e, addLeagues)}
          >
            <HomeH2>Add Leagues</HomeH2>
            <LeaguesSelectorMulti
              options={addOptionsL}
              setter={setToBeAddedL}
            />
            <FormButton disabled={loading} type="submit">
              {loading ? "Processing..." : "Add"}
            </FormButton>
          </HomeForm>
          <HomeForm
            style={{ ...removeLeagueStyle }}
            onSubmit={(e) => onSubmitForm(e, removeLeagues)}
          >
            <HomeH2>Remove a League</HomeH2>
            <LeaguesSelector
              options={userState.leagues.map((league) => {
                return { label: `${league.name}`, value: league._id };
              })}
              setter={setToBeRemovedL}
            />
            <FormButton disabled={loading} type="submit">
              {loading ? "Processing..." : "Remove"}
            </FormButton>
          </HomeForm>
        </HomeWrapper>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
