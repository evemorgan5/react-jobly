import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import axios from "axios";
import JoblyAPI from "./api";



/**
 *  GetCompanyDetail
 *
 *  TODO: useParams() to get handle of company, prop?
 *
 *  State:
 *    - company: details from API as obj { company }
 *
 *  RoutesList -> GetCompanyDetail -> CompanyDetail
 */

function GetCompanyDetail() {
  console.log("GetCompanyDetail");
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function fetchCompanyWhenMounted() {
    async function getCompany() {
      const companyData = await JoblyAPI.getCompany(handle);
      setCompany(c => companyData);
    }
    getCompany();
  }, []);

  console.log("company", company);
  return (
    <div className="GetCompanyDetail">
      <p>GetCompanyDetail! (logic here)</p>
      <CompanyDetail company={company}/>
    </div>
  );
}

export default GetCompanyDetail;