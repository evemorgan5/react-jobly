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

function JobCardList({ jobs }) {
  // console.log("JobCardList");

  return (
    <div className="JobCardList">
      {jobs.map((j, idx) =>
        <JobCard key={idx} job={j} />
      )}
    </div>
  );
}

export default JobCardList;