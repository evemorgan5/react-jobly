import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import JoblyAPI from "./api";

/**
 *  GetCompanyDetail
 *
 *  Props:
 *    - None
 *
 *  State:
 *    - company: details from API as obj { company }
 *
 *  RoutesList -> GetCompanyDetail -> CompanyDetail
 */

function GetCompanyDetail() {
  // console.log("GetCompanyDetail");

  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function fetchCompanyFromAPI() {
    async function getCompany() {
      const companyData = await JoblyAPI.getCompany(handle);
      setCompany(c => companyData);
    }
    getCompany();

  }, []);

  return (
    <div className="GetCompanyDetail">
      {company
        ? <CompanyDetail company={company} />
        : <p>Loading... </p>
      }
    </div>
  );
}

export default GetCompanyDetail;