import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import  { useContext } from "./userContext";
import userContext from './userContext';
import JoblyApi from './api';


/** Site application.
 *
 * App -> { Navigation, RoutesList }
 **/

function App() {
  const [token, setToken] = useState("");


  // TODO: useEffect

  //TODO: loginF
  async function login(formData) {
    const newToken = await JoblyApi.onLoginGetTokenFromAPI(formData);
    setToken(t => newToken);
  }

  //TODO: signupF
  async function signup(formData) {
    const newToken = await JoblyApi.onRegGetTokenFromAPI(formData);
    setToken(t => newToken);
  }

  //TODO: editF

  //TODO:redirect to /companies after login or signup


  return (
    <div className="App">
      <header className="App-header">
        <userContext.Provider value={token}>
        <BrowserRouter>
          <Navigation />
          <RoutesList functions={{login,signup}}/>
        </BrowserRouter>
        </userContext.Provider>
      </header>
    </div>
  );
}

export default App;
