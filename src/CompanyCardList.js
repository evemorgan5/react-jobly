import React from "react";
import CompanyCard from "./CompanyCard";


/**
 *  CompanyCardList
 *
 *  Props:
 *  - companies: array of companies from API [ {company}, ... ]
 *
 *  GetCompanyCardList -> CompanyCardList -> CompanyCard
 */

function CompanyCardList() {
  console.log("CompanyCardList");

  return (
    <div className="CompanyCardList">
      <p>CompanyCardList!</p>
      <CompanyCard />
    </div>
  );
}

export default CompanyCardList;