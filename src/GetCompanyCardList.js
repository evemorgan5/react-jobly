import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import CompanyCardList from "./CompanyCardList";
import JoblyAPI from "./api";

//TODO: why did it break without it before?
// import axios from "axios";

/**
 *  GetCompanyCardList
 *
 *  State:
 *    - companies: array of companies from API [ {company}, ... ]
 *
 *  RoutesList -> GetCompanyCardList -> CompanyCardList
 */

function GetCompanyCardList() {
  // console.log("GetCompanyCardList");
  const [companies, setCompanies] = useState(null);
  const [companiesFound, setCompaniesFound] = useState(false);

  /** Get all companies on mount */
  useEffect(function fetchCompaniesFromAPI() {
    getCompanies();
  }, []);

  /** Get all companies from API */
  async function getCompanies() {
    const companiesData = await JoblyAPI.getCompanies();
    setCompanies(c => companiesData);
    setCompaniesFound(true);
  }

  /** Get all matching companies from API based on search filters */
  async function getFilteredCompanies(searchData) {
    const filteredCompaniesData = await JoblyAPI.getFilteredCompanies(searchData);

    if (filteredCompaniesData) {
      setCompanies(c => filteredCompaniesData);
      setCompaniesFound(true);
    }
  }

  return (
    <div className="GetCompanyCardList">
      <SearchForm
        handleSave={getFilteredCompanies}
        initialFormData={{ name: "" }}
      />
      {companiesFound
        ? <CompanyCardList companies={companies} />
        : <p>Loading... </p>
      }
    </div>
  );
}

export default GetCompanyCardList;