import React from "react";
import JobCard from "./JobCard";

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
      <JobCard />
    </div>
  );
}

export default JobCardList;