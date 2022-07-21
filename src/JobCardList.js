import React from "react";
import JobCard from "./JobCard";

/**
 *  JobCardList
 *
 *  Props:
 *    - jobs: array of jobs from API [ {job}, ... ]
 *
 *  State:
 *    - None
 *
 *  { CompanyDetail, GetJobCardList } -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
  // console.log("JobCardList");

  return (
    <div className="JobCardList">
      {jobs.map(j =>
        <JobCard key={j.id} job={j} />
      )}
    </div>
  );
}

export default JobCardList;