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

  useEffect(function fetchCompaniesFromAPI() {
    async function getCompanies() {
      const companiesData = await JoblyAPI.getCompanies();
      setCompanies(c => companiesData);
      setCompaniesFound(true);
    }
    getCompanies();

  }, []);

  return (
    <div className="GetCompanyCardList">
      <p>GetCompanyCardList! (logic here)</p>
      <SearchForm />
      {/* {companies.map((c, idx) => <p key={idx}>{c.name}</p>)} */}
      {companiesFound
        ? <CompanyCardList companies={companies}/>
        : <p>Loading... </p>
      }
    </div>
  );
}

export default GetCompanyCardList;