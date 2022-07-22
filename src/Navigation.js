import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import userContext from "./userContext";

 /**  Navigation
 *
 *  Props:
 *    - logout: fn passed from App
 *
 *  State:
 *    - None
 *
 *  Context:
 *    - user { username, firstName, lastName, email, isAdmin }
 *
 *  App -> Navigation
 */

function Navigation({ logout }) {

  const { user } = useContext(userContext);

  return (
    <nav className="Navigation">
      <NavLink to="/">
        Jobly
      </NavLink>

      {user
        ?
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
            <span onClick={logout}>Log out {user.username}</span>
          </NavLink>
        </span>
        :
        <span>
          <NavLink to="/login">
            Login
          </NavLink>
          <NavLink to="/signup">
            Sign Up
          </NavLink>
        </span>
      }

    </nav>
  );
}

export default Navigation;
