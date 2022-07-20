// import './App.css';
import React from "react";
import { BrowserRouter} from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
           <Navigation/>
           <RoutesList/>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
