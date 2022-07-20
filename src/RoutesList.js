import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Homepage from "./Homepage";
import GetCompanyCardList from "./GetCompanyCardList";
import GetCompanyDetail from "./GetCompanyDetail";
import GetJobCardList from "./GetJobCardList";

/**
 *  RoutesList
 *
 *  App -> RoutesList -> Routes
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<GetCompanyCardList />} />
      <Route path="/companies/:handle" element={<GetCompanyDetail />} />
      <Route path="/jobs" element={<GetJobCardList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
