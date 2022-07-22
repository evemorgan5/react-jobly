import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";

/**
 *  Homepage
 *
 *  Props:
 * - None
 *
 *  State:
 * - None
 *
 *
 *  RoutesList -> Homepage
 */

function Homepage() {
  const { user } = useContext(userContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <h4>All the jobs in one, convenient place.</h4>
      {user
        ?
        <p>Welcome Back, {user.username}</p>
        :
        <span>
          <Link to="/login">
            Log in
          </Link>
          <Link to="/signup">
            Sign up
          </Link>
        </span>
      }
    </div>
  );
}

export default Homepage;