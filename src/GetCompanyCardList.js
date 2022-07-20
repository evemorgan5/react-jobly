import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import CompanyCardList from "./CompanyCardList";

import axios from "axios";
import JoblyAPI from "./api";
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
  const [companies, setCompanies] = useState(null);
  const [companiesFound, setCompaniesFound] = useState(false);

  async function getCompanies() {
    const companiesData = await JoblyAPI.getCompanies();
    setCompanies(c => companiesData);
    setCompaniesFound(true);
  }

  useEffect(function fetchCompaniesFromAPI() {
    getCompanies();
  }, []);

  async function getFilteredCompanies(searchData) {
    const filteredCompaniesData = await JoblyAPI.getFilteredCompanies(searchData);
    setCompanies(c => filteredCompaniesData);
    setCompaniesFound(true);
  }

  return (
    <div className="GetCompanyCardList">
      <p>GetCompanyCardList! (logic here)</p>
      <SearchForm handleSave={getFilteredCompanies}/>
      {/* {companies.map((c, idx) => <p key={idx}>{c.name}</p>)} */}
      {companiesFound
        ? <CompanyCardList companies={companies}/>
        : <p>Loading... </p>
      }
    </div>
  );
}

export default GetCompanyCardList;