import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./index.css";
import PageNavHeader from "./Components/RegistrationForm/PageNavHeader/PageNavHeader";
import PersonalInfo from "./Components/RegistrationForm/PersonalInfo/PersonalInfo";
import Qualification from "./Components/RegistrationForm/Qualification/Qualification";
import Review from "./Components/RegistrationForm/Review/Review";

const Registration = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);

  const goToPreviousPage = () => {
    const path = window.location.pathname;
    if (path.includes("/register/qualification")) {
      navigate("/register/personalInfo");
    } else if (path.includes("/register/review")) {
      navigate("/register/qualification");
    }
  };

  const goToNextPage = () => {
    const path = window.location.pathname;
    if (path.includes("/register/personalInfo")) {
      navigate("/register/qualification");
    } else if (path.includes("/register/qualification")) {
      navigate("/register/review");
    }
  };

  return (
    <>
      <PageNavHeader />
      <div className="container">
        <Routes>
          <Route
            path="/register/personalInfo"
            element={<PersonalInfo editMode={!editMode} />}
          />
          <Route path="/register/qualification" element={<Qualification />} />
          <Route
            path="/register/review"
            element={<Review editMode={editMode} setEditMode={setEditMode} />}
          />
        </Routes>
        <div className="navigation-buttons">
          {window.location.pathname !== "/register/personalInfo" && (
            <button onClick={goToPreviousPage}>Previous</button>
          )}
          {window.location.pathname !== "/register/review" && (
            <button onClick={goToNextPage}>Next</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Registration;
