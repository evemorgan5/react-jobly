import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import tokenContext from './tokenContext';
import JoblyApi from './api';
import jwt_decode from "jwt-decode";


/** Site application.
 *
 *  App -> { Navigation, RoutesList }
 **/

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(function fetchUserInfoFromAPI() {
    if (token) {
      const { username } = jwt_decode(token);
      getUser(username, token);
    }
  }, [token]);

  /** Get current user details */
  async function getUser(username, token) {
    JoblyApi.token = token;
    const userData = await JoblyApi.getUserFromAPI(username);
    setUser(u => userData);
  }

  // console.log("user",user);

  /** Login user and updates token and username */
  async function login(formData) {
    const userDetails = {
      username: formData["Username"],
      password: formData["Password"],
    };

    const newToken = await JoblyApi.onLoginGetTokenFromAPI(userDetails);

    setToken(t => newToken);
    setUser(u => {
      return {
        username: userDetails.username
      };
    });
  }

  /** Signs up user and updates token and username */
  async function signup(formData) {
    console.log(formData);
    const userDetails = {
      username: formData["Username"],
      password: formData["Password"],
      firstName: formData["First name"],
      lastName: formData["Last name"],
      email: formData["Email"],
    };
    const newToken = await JoblyApi.onRegGetTokenFromAPI(userDetails);
    setToken(t => newToken);
    setUser(u => {
      return {
        username: userDetails.username
      };
    });
    // JoblyApi.token = newToken;
  }

  /** Log out user and updates token and user */
  function logout() {
    console.log("LOGOUT");
    setToken(t => "");
    setUser(u => {});
    return <Navigate to="/"/>;
  }


  console.log("APP TOKEN", token);
  //TODO: editF




  //TODO:redirect to /companies after login or signup


  return (
    <div className="App">
      <header className="App-header">
        <tokenContext.Provider value={{ token }}>
          <BrowserRouter>
            <Navigation logout={logout}/>
            <RoutesList functions={{ login, signup }} />
          </BrowserRouter>
        </tokenContext.Provider>
      </header>
    </div>
  );
}

export default App;
