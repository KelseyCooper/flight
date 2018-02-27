import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";
import loginInvalidUserError from "./actions_errors";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

function handleErrors(response) {
  if (!response.ok) {
      throw response;
  }
  return response;
}

export function authenticateUser(auth) {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `email=${auth.email}&password=${auth.password}`
  };

  return dispatch => {
    return fetch("http://localhost:3001/users", config)
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {

        localStorage.setItem("jwtToken", json.token);
        setAuthorizationToken(json.token);
        dispatch(setCurrentUser(jwt.decode(json.token)));
      })
      .catch(error => {
      if (error.status === 401) {
        dispatch(loginInvalidUserError(true));
      } else if (error.status === 402) {
        // dispatch()
        console.log('402');
        
      }
        
      });
  };
}
