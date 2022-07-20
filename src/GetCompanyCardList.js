import React from "react";
import SearchForm from "./SearchForm";
import CompanyCardList from "./CompanyCardList";


/**
 *  GetCompanyCardList
 *
 *  State:
 *    - companies: array of companies from API [ {company}, ... ]
 *
 *  RoutesList -> GetCompanyCardList -> CompanyCardList
 */

function GetCompanyCardList() {
	console.log("GetCompanyCardList");

  return (
    <div className="GetCompanyCardList">
      <p>GetCompanyCardList! (logic here)</p>
      <SearchForm />
      <CompanyCardList />
    </div>
  );
}

export default GetCompanyCardList;