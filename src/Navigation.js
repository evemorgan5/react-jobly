import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

/**
 *  Navigation
 *
 *  App -> Navigation
 */

//TODO: check context to decide which nav links to show
function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink to="/">
        Jobly
      </NavLink>

      <span>
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

        {/** TODO: WHAT SPAN TO PUT THESE IN */}
        <NavLink to="/login">
          Login
        </NavLink>
        <NavLink to="/signup">
          Sign Up
        </NavLink>
      </span>
    </nav>
  );
}

export default Navigation;
