import axios from "axios";
import { FormEvent, useState } from "react";
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

export const RegisterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  color: #00f783;
  padding: 20px 0;
`;

export const RegisterForm = styled.form`
  max-width: 60%;
  background: #37003c;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  border: 2px solid;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    max-width: 90%;
    width: 90%;
  }
`;

export const RegisterFormGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
  column-gap: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`;

const Register: React.FunctionComponent<RouteComponentProps> = ({
  history,
}): JSX.Element => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const register = async (e: FormEvent) => {
    e.preventDefault();
    const ERROR_SHOW_TIME = 3000;
    const emptyError = () => setTimeout(() => setError(""), ERROR_SHOW_TIME);
    if (/\s/g.test(username)) {
      setError("No whitespace in username.");
      return emptyError();
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return emptyError();
    }
    try {
      const {
        data: { token },
      } = await axios.post("/api/auth/register", {
        username,
        password,
        email,
      });
      localStorage.setItem("authToken", token);
      history.push("/leagues");
    } catch (e) {
      const error = (e as ErrorResponseType).response.data.error;
      setError(error.replace("User validation failed: ", ""));
      return emptyError();
    }
  };

  return (
    <>
      <Navbar />
      <RegisterWrapper>
        <RegisterForm onSubmit={register}>
          <FormH1>Register Here</FormH1>
          <FormError show={error}>{error}</FormError>
          <RegisterFormGrid>
            <FormGroup
              labelText="Enter a Username"
              placeholder="username"
              type="text"
              id="name"
              required
              minLength={3}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
              labelText="Enter Password"
              type="password"
              id="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormGroup
              placeholder="confirm password"
              labelText="Confirm Password"
              type="password"
              id="confirmpassword"
              required
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </RegisterFormGrid>
          <FormButton type="submit">Register Now</FormButton>
          <FormSpan>
            Already have an account?
            <br /> Log in <FormLink to="/login">here</FormLink>
          </FormSpan>
        </RegisterForm>
      </RegisterWrapper>
    </>
  );
};

export default Register;
