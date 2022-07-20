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

function CompanyCardList({companies}) {
  console.log("CompanyCardList");

  return (
    <div className="CompanyCardList">
      <p>CompanyCardList!</p>
      {companies.map((c, idx) =>
        <CompanyCard key={idx} company={c}/>
      )}
    </div>
  );
}

export default CompanyCardList;