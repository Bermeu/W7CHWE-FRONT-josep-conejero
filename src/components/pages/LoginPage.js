/* import { useSelector } from "react-redux"; */
/* import { useNavigate } from "react-router-dom"; */
/* import LoginForm from "../forms/LoginForm"; */
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: large;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  padding-bottom: 100px;
  font-size: 60px;
`;

const Band = styled.div`
  padding-bottom: 50px;
`;

const LoginPage = () => {
  /* let navigate = useNavigate();

  const userState = useSelector((state) => {
    return state.user;
  });

  if (userState.profile.name) {
    navigate("/home");
  } */

  return (
    <Container>
      <Heading>LOGIN PAGE</Heading>
      <form autoComplete="off">
        <div>
          <label htmlFor="username">Username </label>
          <input
            name="username"
            type="text"
            placeholder="Enter Your Username"
            className="form-control"
            id="username"
            onChange={() => {}}
          />
        </div>
        <Band></Band>
        <div>
          <label htmlFor="password">Password </label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            id="password"
            onChange={() => {}}
          />
        </div>
        <Band></Band>
        <button type="submit"> Submit </button>
      </form>
    </Container>
  );
};

export default LoginPage;
