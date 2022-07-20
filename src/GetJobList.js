import React from "react";

/**
 *  GetJobList
 *
 *  State:
 *    - jobs: array of jobs from API [ {job}, ... ]
 *
 *  RoutesList -> GetJobList -> JobCardList
 */

function GetCompanyList() {
	console.log("GetCompanyList");

  return (
    <div className="GetCompanyList">
      <p>GetCompanyList!</p>
    </div>
  );
}

export default GetCompanyList;