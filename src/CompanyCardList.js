import React from "react";
import CompanyCard from "./CompanyCard";


/**
 *  CompanyCardList
 *
 *  Props:
 *    - companies: array of companies from API [ {company}, ... ]
 *
 *  State:
 *    - None
 *
 *  GetCompanyCardList -> CompanyCardList -> CompanyCard
 */

function CompanyCardList({ companies }) {
  // console.log("CompanyCardList");

  return (
    <div className="CompanyCardList">
      {companies.map(c =>
        <CompanyCard key={c.handle} company={c} />
      )}
    </div>
  );
}

export default CompanyCardList;