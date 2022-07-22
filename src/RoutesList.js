import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import userContext from "./userContext";

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
 * Props:
 * - functions { login, signup}
 *
 * State:
 * - None
 *
 * //TODO: context
 *
 *
 *  App -> RoutesList -> Routes
 *
 */

function RoutesList({ functions }) {
  const { login, signup } = functions;

  const { user } = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {user
        ?
        <>
          <Route path="/companies" element={<GetCompanyCardList />} />
          <Route path="/companies/:handle" element={<GetCompanyDetail />} />
          <Route path="/jobs" element={<GetJobCardList />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
        :
        <>
          <Route path="/login" element={<LoginForm handleSave={login} />} />
          <Route path="/signup" element={<SignupForm handleSave={signup} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      }
    </Routes>
  );
}

export default RoutesList;
