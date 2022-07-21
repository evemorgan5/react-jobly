import React from "react";
import JobCardList from "./JobCardList";

/**
 *  CompanyDetail
 *
 *  Prop:
 *    - company: details from API as obj { company }
 *  State:
 *  - None
 *
 *  GetCompanyDetail -> CompanyDetail -> JobCardList
 */

function CompanyDetail({ company }) {
  // console.log("CompanyDetail");

  return (
    <div className="CompanyDetail">
      <h2>{company.name} </h2>
      <h4>{company.description}</h4>
      <hr></hr>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;