import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import CompanyCardList from "./CompanyCardList";
import JoblyAPI from "./api";

/**
 *  GetCompanyCardList
 *
 *  Props:
 *    - None
 *
 *  State:
 *    - companies: array of companies from API [ {company}, ... ]
 *
 *  RoutesList -> GetCompanyCardList -> CompanyCardList
 */

function GetCompanyCardList() {
  // console.log("GetCompanyCardList");

  const [companies, setCompanies] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  /** Get all companies on mount */
  useEffect(function fetchCompaniesFromAPI() {
    getCompanies(searchTerm);
  }, [searchTerm]);

  /** Get all companies from API */
  async function getCompanies(term) {
    const companiesData = await JoblyAPI.getCompaniesFromAPI(term);
    setCompanies(c => companiesData);
  }

  // /** Get all companies from API */
  // async function getCompanies() {
  //   const companiesData = await JoblyAPI.getCompanies();
  //   setCompanies(c => companiesData);
  // }

  /** Get all matching companies from API based on search filters */
  // async function getFilteredCompanies(searchData) {
  //   const filteredCompaniesData = await JoblyAPI.getFilteredCompanies(searchData);

  //   if (filteredCompaniesData) {
  //     setCompanies(c => filteredCompaniesData);
  //   }
  // }

  /** Get search term from form and set in state */
  function updateSearchTerm(formData) {
    const term = formData.name;
    setSearchTerm(t => term);
  }

  return (
    <div className="GetCompanyCardList">
      <SearchForm
        handleSave={updateSearchTerm}
        initialFormData={{ name: "" }}
      />

      {companies
        ? <CompanyCardList companies={companies} />
        : <p>Loading... </p>
      }

      {companies && companies.length === 0 &&
        <p>Sorry, no results were found!</p>
      }
    </div>
  );
}

export default GetCompanyCardList;