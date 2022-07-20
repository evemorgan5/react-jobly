import React from "react";
import { Link } from "react-router-dom";

/**
 *  CompanyCard
 *
 *  Props:
 *    - company: details from API as obj { company }
 *
 *  CompanyCardList -> CompanyCard
 */

function CompanyCard({company}) {
  // console.log("CompanyCard");

  return (
    <div className="CompanyCard">
      <Link to={`/companies/${company.handle}`}>
        {company.name}
      </Link>
      <p>{company.description}</p>
      {company.logoUrl &&
        <img src={`${company.logoUrl}`} alt={`${company.name}`}></img>
      }
      <hr></hr>
    </div>
  );
}

export default CompanyCard;