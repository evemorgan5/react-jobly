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

function CompanyDetail({handle}) {
  console.log("CompanyDetail");

  return (
    <div className="CompanyDetail">
      <p>CompanyDetail! {handle} </p>
      <JobCardList />
    </div>
  );
}

export default CompanyDetail;