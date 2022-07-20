import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Homepage from "./";
import  GetCompanyList from "./";
import GetCompanyDetail from "./";
import GetJobList from "./";



function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/companies" element={<GetCompanyList/>} />
      <Route path="/companies/:handle" element={<GetCompanyDetail/>} />
      <Route path="/jobs" element={<GetJobList/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
