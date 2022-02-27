/* import { useSelector } from "react-redux"; */
/* import { useNavigate } from "react-router-dom"; */
/* import LoginForm from "../forms/LoginForm"; */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../../redux/thunks/thunk";
import styled from "styled-components";

const RegisterPage = () => {
  const emptyDataForm = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyDataForm);

  /* const handleForm = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  }; */

  const resetForm = () => {
    setFormData(emptyDataForm);
  };

  const dispatch = useDispatch();

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUserThunk(formData));
    resetForm();
  };

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

  return (
    <Container>
      <Heading>REGISTER PAGE</Heading>
      <form onSubmit={formSubmit} autoComplete="off">
        <div>
          <label htmlFor="name">Name </label>
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className="form-control"
            id="name"
            onChange={() => {}}
          />
        </div>
        <Band></Band>
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

export default RegisterPage;
