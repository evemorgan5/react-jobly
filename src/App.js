import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import userContext from './userContext';
import JoblyApi from './api';
import jwt_decode from "jwt-decode";

const LOCAL_STORAGE_TOKEN_KEY = 'jobly-token';

/** Site application.
 *
 *  State:
 *  - user {username, firstName, lastName, email, isAdmin}
 *  - token as string for login auth
 *
 *  Props:
 *  - None
 *
 *  App -> { Navigation, RoutesList }
 *
 **/

function App() {
  const [token, setToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY));
  const [user, setUser] = useState(null);

  console.log("TOKEN ON LOAD", token);
  console.log("USER ON LOAD", user);

  /** Gets user from API when token changes */
  useEffect(function fetchUserInfoFromAPI() {

    if (token) {
      putTokenInLS(token);
      const { username } = jwt_decode(token);
      //TODO: try catch - for bad token and catch error
      getUser(username, token);
    }
  }, [token]);


  /** Add token in localStorage, or retreive if it already exists in LS */
  function putTokenInLS(token) {
    const joblyToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

    if (!joblyToken && token) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    }
  }

  /** Get current user details */
  async function getUser(username, token) {
    JoblyApi.token = token;
    const userData = await JoblyApi.getUserFromAPI(username);
    setUser(u => userData);
  }
  //console.log("user",user);


  /** Login user and updates token and username */
  //TODO: cleanup formData
  async function login(formData) {
    const userDetails = {
      username: formData["Username"],
      password: formData["Password"],
    };

    const newToken = await JoblyApi.onLoginGetTokenFromAPI(userDetails);
    setToken(t => newToken);
  }

  /** Signs up new user and updates token and username */
  //TODO: cleanup formData
  async function signup(formData) {
    const userDetails = {
      username: formData["Username"],
      password: formData["Password"],
      firstName: formData["First name"],
      lastName: formData["Last name"],
      email: formData["Email"],
    };
    const newToken = await JoblyApi.onRegGetTokenFromAPI(userDetails);
    setToken(t => newToken);
  }

  /** Log out user and resets token and user to initial values */
  function logout() {
    setToken(t => "");
    setUser(u => null);
    localStorage.setItem('jobly-token', "");
  }

  //TODO: editF
  // update user based on formData.
  //    will call JoblyAPI function that patches user

  if (token && !user) return <h1>Loading...</h1>

  return (
    <div className="App">
      <header className="App-header">
        <userContext.Provider value={{ user }}>
          <BrowserRouter>
            <Navigation logout={logout}/>
            <RoutesList functions={{ login, signup }} />
          </BrowserRouter>
        </userContext.Provider>
      </header>
    </div>
  );
}

export default App;
