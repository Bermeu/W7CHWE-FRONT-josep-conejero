/* import { useSelector } from "react-redux"; */
/* import { useNavigate } from "react-router-dom"; */
/* import LoginForm from "../forms/LoginForm"; */
import styled from "styled-components";

const LoginPage = () => {
  /* let navigate = useNavigate();

  const userState = useSelector((state) => {
    return state.user;
  });

  if (userState.profile.name) {
    navigate("/home");
  } */
  const Container = styled.main`
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: large;
    padding-top: 100px;
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
    padding-bottom: 100px;
  `;
  return (
    <Container>
      <Heading>LOGIN PAGE</Heading>

      <Band></Band>
    </Container>
  );
};

export default LoginPage;
