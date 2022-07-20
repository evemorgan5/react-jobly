import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";

/** TODO: */

function Navigation() {
  return (
    <nav className="Navigation">
      <Link to="/">
        Jobly
      </Link>
      <Link to="/companies">
        Companies
      </Link>
      <Link to="/jobs">
        Jobs
      </Link>
    </nav>
  );
}

export default Navigation;
