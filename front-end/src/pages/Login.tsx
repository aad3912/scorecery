import axios from "axios";
import { FormEvent, useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import FormGroup from "../components/common/form-group/FormGroups";
import {
  FormButton,
  FormSpan,
  FormLink,
  FormH1,
  FormError,
} from "../components/common/FormElements";
import Navbar from "../components/common/navbar/Navbar";
import AuthContext from "../context/AuthContext";

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  color: #00f783;
  padding: 20px 0;
`;

export const LoginForm = styled.form`
  width: 25%;
  background: #37003c;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  border: 2px solid;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    width: 60%;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const LoginFormGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  column-gap: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    row-gap: 20px;
  }
`;

const Login: React.FunctionComponent<RouteComponentProps> = ({
  history,
}): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setIsAuth, userDispatch } = useContext(AuthContext);

  const login = async (e: FormEvent) => {
    e.preventDefault();
    const ERROR_SHOW_TIME = 3000;
    const emptyError = () => setTimeout(() => setError(""), ERROR_SHOW_TIME);
    try {
      const {
        data: { token, leagues, username },
      } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      setIsAuth(true);
      userDispatch({ type: "SET_USERNAME", payload: username });
      userDispatch({ type: "SET_LEAGUES", payload: leagues });
      localStorage.setItem("authToken", token);
      history.push("/home");
    } catch (e) {
      const error = (e as ErrorResponseType).response.data.error;
      setError(error.replace("User validation failed: ", ""));
      return emptyError();
    }
  };

  return (
    <>
      <Navbar />
      <LoginWrapper>
        <LoginForm onSubmit={login}>
          <FormH1>Login</FormH1>
          <FormError show={error}>{error}</FormError>
          <LoginFormGrid>
            <FormGroup
              labelText="Enter your Email"
              placeholder="email"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormGroup
              placeholder="password"
              labelText="Enter your Password"
              type="password"
              id="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LoginFormGrid>
          <FormButton type="submit">Login Now</FormButton>
          <FormSpan>
            Don't have an account?
            <br /> Register <FormLink to="/register">here</FormLink>
          </FormSpan>
        </LoginForm>
      </LoginWrapper>
    </>
  );
};

export default Login;
