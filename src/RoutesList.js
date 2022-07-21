import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Homepage from "./Homepage";
import GetCompanyCardList from "./GetCompanyCardList";
import GetCompanyDetail from "./GetCompanyDetail";
import GetJobCardList from "./GetJobCardList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";


/**
 *  RoutesList
 *
 *  App -> RoutesList -> Routes
 */


//TODO: add context check. only show routes depending on logged in or not
//  if not authorized, navigate to /login
function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<GetCompanyCardList />} />
      <Route path="/companies/:handle" element={<GetCompanyDetail />} />
      <Route path="/jobs" element={<GetJobCardList />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
