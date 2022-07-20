import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

/**
 *  Navigation
 *
 *  App -> Navigation -> RoutesList
 */

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
      </span>
    </nav>
  );
}

export default Navigation;
