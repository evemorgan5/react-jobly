import React from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";

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
  //TODO: pass in handle when needed

  return (
    <div className="GetCompanyDetail">
      <p>GetCompanyDetail! (logic here)</p>
      <CompanyDetail handle={handle}/>
    </div>
  );
}

export default GetCompanyDetail;