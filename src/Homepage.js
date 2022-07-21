import React from "react";
import { Link } from "react-router-dom";

/**
 *  Homepage
 *
 *  RoutesList -> Homepage
 */

//TODO: show buttons or message depending on context
function Homepage() {
	// console.log("Homepage");

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <h4>All the jobs in one, convenient place.</h4>
      <span>
        <Link to="/login">
          Log in
        </Link>
        <Link to="/signup">
          Sign up
        </Link>
      </span>
      <p>Welcome Back, USER.name</p>
    </div>
  );
}

export default Homepage;