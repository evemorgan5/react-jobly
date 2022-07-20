import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import Homepage from "./Homepage";
import GetCompanyList from "./GetCompanyList";
import GetCompanyDetail from "./GetCompanyDetail";
import GetJobList from "./GetJobList";



function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<GetCompanyList />} />
      <Route path="/companies/:handle" element={<GetCompanyDetail />} />
      <Route path="/jobs" element={<GetJobList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
