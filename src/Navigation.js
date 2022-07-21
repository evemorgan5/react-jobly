import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import tokenContext from "./tokenContext";
/**
 *  Navigation
 *
 *  App -> Navigation
 */

//TODO: check context to decide which nav links to show


function Navigation() {

  const { token } = useContext(tokenContext);
  console.log("TOKEN NAV", token);

  return (
    <nav className="Navigation">
      <NavLink to="/">
        Jobly
      </NavLink>

      {token
      ? <span>
          <NavLink to="/companies">
            Companies
          </NavLink>
          <NavLink to="/jobs">
            Jobs
          </NavLink>
          <NavLink to="/profile">
            Profile
          </NavLink>
          <NavLink to="/">
            Log out USER.name
          </NavLink>
        </span>
      : <span>
          <NavLink to="/login">
            Login
          </NavLink>
          <NavLink to="/signup">
            Sign Up
          </NavLink>
        </span>
      }


        {/** TODO: WHAT SPAN TO PUT THESE IN */}
    </nav>
  );
}

export default Navigation;
