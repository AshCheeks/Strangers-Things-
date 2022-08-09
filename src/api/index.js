import React from 'react';

export const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
export const COHORT_NAME = '2204-ftb-et-web-pt';
export const APIURL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// -------------- FETCH ALL-POSTS ------------------------
export const showAllPosts = async () => {
  try {
    const response = await fetch(`${APIURL}/posts`);
    const data = await response.json();
    return data;
    
  } catch (error) {
    throw console.error('Well seems there is an error', error);
  }
};

// ------------- FETCH REGISTER A USER -------------------
export const registerUser = (username, password, setToken, setLoggedIn) => {
  console.log(username, password, setToken, setLoggedIn);

  fetch(`${APIURL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username: `${username}`,
        password: `${password}`,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      // setLoggedIn(true);
      setToken(result.data.token);
      window.localStorage.setItem(
        'user',
        JSON.stringify({
          username: `${username}`,
          password: `${password}`,
          token: `${result.data.token}`,
        })
      );
      return result;
    })
    .catch(console.error);
};

// ------------- FETCH LOGIN A USER ----------------------
export const userLogin = (
  username,
  password,
  setUserName,
  setPassword,
  setToken,
  setLoggedIn
) => {
  // console.log(username, password);
  fetch(`${APIURL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username: `${username}`,
        password: `${password}`,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success === true) {
        // setToken(result.data.token);
        setLoggedIn(true);
        window.localStorage.setItem(
          'user',
          JSON.stringify({
            username: `${username}`,
            password: `${password}`,
            token: `${result.data.token}`,
          })
        );
      } else if (result.success === false) {
        alert(result.error.message);
      }
      console.log("USER-LOGIN:", result);
      return result;
    })
    .catch(console.error);
};

// ------------ FETCH PROFILE USER DATA ----------------------------------------
export const userProfile = (token, setUserData) => {
  fetch(`${APIURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      setUserData(result);
      // console.log("USER-PROFILE:", result);
      return result;
    })
    .catch(console.error);
}

// ------------ FETCH LOGIN-OUT A USER -------------------
export const userLogOut = (setToken, setLoggedIn) => {
  setLoggedIn(false);
  setToken('');
  localStorage.clear();
};
