import './App.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";

/** Site application.
 *
 * App -> { Navigation, RoutesList }
 **/

function App() {

  //TODO: loginF
  //TODO: signupF
  //TODO: editF
  //TODO:redirect to /companies after login or signup
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navigation />
          <RoutesList />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
