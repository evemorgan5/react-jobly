import React from "react";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

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

  return (
    <div className="GetJobCardList">
      <p>GetJobCardList! (logic here)</p>
      <SearchForm />
      <JobCardList />
    </div>
  );
}

export default GetJobCardList;