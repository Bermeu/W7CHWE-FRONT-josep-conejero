/* import { Button } from "@nextui-org/react"; */

import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
/* import React, { useEffect } from "react"; */
/* import { useDispatch, useSelector } from "react-redux"; */

/* import { loadUsersThunk } from "../../redux/thunks/allUsersThunks"; */

const HomePage = () => {
  const navigate = useNavigate();
  /* const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]); */

  /* const theUser = useSelector((state) => state.user); */

  const Container = styled.main`
    width: 100%;
    text-align: center;
    background-color: #212375;
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
    <>
      {/* <div>I am the HomePage of {theUser.profile.name} </div>
      <Button
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        LogOut
      </Button> */}
      <Container>
        <Heading>SOCIAL RED</Heading>
        <Button
          actionOnClick={() => {
            navigate("/register");
          }}
          text="REGISTER"
        ></Button>
        <Band></Band>
        <Button
          actionOnClick={() => {
            navigate("/login");
          }}
          text="LOG IN"
        ></Button>
        <Band></Band>
      </Container>
    </>
  );
};

export default HomePage;
