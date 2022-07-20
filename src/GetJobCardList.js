import React from "react";

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
      <p>GetJobCardList!</p>
    </div>
  );
}

export default GetJobCardList;