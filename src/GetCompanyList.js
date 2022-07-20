import React from "react";

/**
 *  GetCompanyList
 *
 *  State:
 *    - companies: array of companies from API [ {company}, ... ]
 *
 *  RoutesList -> GetCompanyList -> CompanyList
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