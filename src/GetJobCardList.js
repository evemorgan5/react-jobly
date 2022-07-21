import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

import JoblyAPI from "./api";

/**
 *  GetJobCardList
 *
 *  Props:
 *    - None
 *
 *  State:
 *    - jobs: array of jobs from API [ {job}, ... ]
 *
 *  RoutesList -> GetJobCardList -> JobCardList
 */

function GetJobCardList() {
  //console.log("GetJobCardList");

  const [jobs, setJobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  /** Get all jobs on mount and searchTerm update */
  useEffect(function fetchJobsFromAPI() {
    getJobs(searchTerm);
  }, [searchTerm]);

  /** Get all jobs from API with optional search term */
  async function getJobs(term) {
    const jobsData = await JoblyAPI.getJobsFromAPI(term);
    setJobs(c => jobsData);
  }

  /** Get search term from form and set in state */
  function updateSearchTerm(formData) {
    const term = formData.title;
    setSearchTerm(t => term);
  }

  return (
    <div className="GetJobCardList">
      <SearchForm
        handleSave={updateSearchTerm}
        initialFormData={{ title: "" }}
      />

      {jobs
        ? <JobCardList jobs={jobs} />
        : <p>Loading... </p>
      }

      {jobs && jobs.length === 0 &&
        <p>Sorry, no results were found!</p>
      }
    </div>
  );
}

export default GetJobCardList;