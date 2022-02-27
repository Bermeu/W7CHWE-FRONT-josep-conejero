/* import {
  loadPeopleAction,
  loginUserAction,
  registerUserAction,
} from "../actions/actionCreators";
import jwtDecode from "jwt-decode";

export const loginUserThunk = (user) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    const token = await response.json();
    const { id, username } = await jwtDecode(token.token);
    localStorage.setItem("UserToken", token.token);
    dispatch(loginUserAction({ id, username, token: token.token }));
  }
};

export const registerUserThunk = (user) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (response.ok) {
    const token = await response.json();
    const { id, name } = await jwtDecode(token.token);
    dispatch(registerUserAction({ id, name, token: token.token }));
  }
};

export const loadPeopleThunk = async (dispatch) => {
  const token = localStorage.getItem("UserToken");
  const response = await fetch(`${process.env.REACT_APP_API_URL}/people`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const peopleList = await response.json();
  dispatch(loadPeopleAction(peopleList.people));
};
 */
