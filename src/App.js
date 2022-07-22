import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import userContext from './userContext';
import JoblyApi from './api';
import jwt_decode from "jwt-decode";


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
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  /** Gets user from API when token changes */
  useEffect(function fetchUserInfoFromAPI() {

    setOrRetreiveTokenFromLS(token);

    if (token) {
      const { username } = jwt_decode(token);
      //TODO: try catch - for bad token and catch error
      getUser(username, token);
    }
  }, [token]);


  /** Add token in localStorage, or retreive if it already exists in LS */
  function setOrRetreiveTokenFromLS(token) {
    const joblyToken = localStorage.getItem('jobly-token');
    console.log("token", token);
    console.log("jobly before if check", joblyToken)

    if (!joblyToken) {
      localStorage.setItem('jobly-token', token);
      console.log("jobly in if check", joblyToken);
    }
    else {
      setToken(t => joblyToken);
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
