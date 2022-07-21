import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import tokenContext from './tokenContext';
import JoblyApi from './api';


/** Site application.
 *
 *  App -> { Navigation, RoutesList }
 **/

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  // TODO: useEffect
  useEffect(function fetchUserInfoFromAPI() {
    getUser(user.username, token);
  }, [user, token]);

  /** Get current user details */
  async function getUser(username, token) {
    const userData = await JoblyApi.getUserFromAPI(username, token);
    setUser(u => userData);
  }

  //TODO: loginF
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

  //TODO: signupF
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
  console.log("APP TOKEN", token);
  //TODO: editF

  //TODO:redirect to /companies after login or signup


  return (
    <div className="App">
      <header className="App-header">
        <tokenContext.Provider value={{ token }}>
          <BrowserRouter>
            <Navigation />
            <RoutesList functions={{ login, signup }} />
          </BrowserRouter>
        </tokenContext.Provider>
      </header>
    </div>
  );
}

export default App;
