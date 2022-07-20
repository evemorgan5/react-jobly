import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

import JoblyAPI from "./api";

/**
 *  GetJobCardList
 *
 *  State:
 *    - jobs: array of jobs from API [ {job}, ... ]
 *
 *  RoutesList -> GetJobCardList -> JobCardList
 */

function GetJobCardList() {
  console.log("GetJobCardList");
  const [jobs, setJobs] = useState(null);
  const [jobsFound, setJobsFound] = useState(false);

  /** Get all jobs on mount */
  useEffect(function fetchJobsFromAPI() {
    getJobs();
  }, []);

  /** Get all jobs from API */
  async function getJobs() {
    const jobsData = await JoblyAPI.getJobs();
    setJobs(c => jobsData);
    setJobsFound(true);
  }

  /** Get all matching jobs from API based on search filters */
  async function getFilteredJobs(searchData) {
    const filteredJobsData = await JoblyAPI.getFilteredJobs(searchData);

    if (filteredJobsData) {
      setJobs(c => filteredJobsData);
      setJobsFound(true);
    }
  }
  return (
    <div className="GetJobCardList">
      <SearchForm
        handleSave={getFilteredJobs}
        initialFormData={{ title: "" }}
      />
      {jobsFound
        ? <JobCardList jobs={jobs} />
        : <p>Loading... </p>
      }
    </div>
  );
}

export default GetJobCardList;