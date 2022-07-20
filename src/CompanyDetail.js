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
      <p>CompanyDetail! {company.name} </p>
      <JobCardList />
    </div>
  );
}

export default CompanyDetail;