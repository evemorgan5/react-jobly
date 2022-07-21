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

  useEffect(function fetchUserInfoFromAPI() {
    getUser(user.username, token);
  }, [user.username, token]);

  /** Get current user details */
  async function getUser(username, token) {
    JoblyApi.token = token;
    const userData = await JoblyApi.getUserFromAPI(username);
    setUser(u => userData);
  }

  console.log("user",user);

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

  /** Log out user and updates token and user*/
  async function logout() {
    setToken(t => "");
    setUser(u => {});
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
