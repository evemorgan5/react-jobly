import React from "react";

/**
 *  JobCard
 *
 *  Props:
 *    - job: details from API as obj { job }
 *
 *  State:
 *    - None
 *
 *  JobCardList -> JobCard
 */

function JobCard({ job }) {
  // console.log("JobCard");

  return (
    <div className="JobCard">
      <h2>{job.title}</h2>
      <h3>{job.companyName}</h3>
      <h3>Salary: {job.salary}</h3>
      <h3>Equity: {job.equity}</h3>
    </div>
  );
}

export default JobCard;