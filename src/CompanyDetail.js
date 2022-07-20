import React from "react";
import JobCardList from "./JobCardList";

/**
 *  CompanyDetail
 *
 *  Prop:
 *    - company: details from API as obj { company }
 *
 *  GetCompanyDetail -> CompanyDetail -> JobCardList
 */

function CompanyDetail({company}) {
  console.log("CompanyDetail");

  return (
    <div className="CompanyDetail">
      <h2>{company.name} </h2>
      <h4>{company.description}</h4>
      {company.jobs.map((j, idx) => <p key={idx}>{j.title}</p>)}
      <JobCardList jobs={company.jobs}/>
    </div>
  );
}

export default CompanyDetail;