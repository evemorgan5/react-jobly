import React from "react";

/**
 *  JobCardList
 *
 *  Prop:
 *    - jobs: array of jobs from API [ {job}, ... ]
 *
 *  { CompanyDetail, GetJobCardList } -> JobCardList -> JobCard
 */

function JobCardList() {
	console.log("JobCardList");

  return (
    <div className="JobCardList">
      <p>JobCardList!</p>
    </div>
  );
}

export default JobCardList;