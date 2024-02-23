import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import PersonalInfo from "./Components/RegistrationForm/PersonalInfo/PersonalInfo";
import Qualification from "./Components/RegistrationForm/Qualification/Qualification";
import Review from "./Components/RegistrationForm/Review/Review";
import Layout from "./Components/RegistrationForm/Layout";

const Registration = () => {
  const navigate = useNavigate();
  const [personalInfoEditMode, setPersonalInfoEditMode] = useState(true);
  const [qualificationEditMode, setQualificationEditMode] = useState(true);

  const goToPreviousPage = () => {
    const path = window.location.pathname;
    if (path.includes("/registration/qualification")) {
      navigate("/registration/personalInfo");
    } else if (path.includes("/registration/review")) {
      navigate("/registration/qualification");
    }
  };

  const goToNextPage = () => {
    const path = window.location.pathname;
    if (path.includes("/registration/personalInfo")) {
      navigate("/registration/qualification");
    } else if (path.includes("/registration/qualification")) {
      navigate("/registration/review");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route
              path="/personalInfo"
              element={<PersonalInfo editMode={!personalInfoEditMode} />}
            />
            <Route
              path="/qualification"
              element={<Qualification editMode={!qualificationEditMode} />}
            />
            <Route
              path="/review"
              element={
                <Review
                  personalInfoEditMode={personalInfoEditMode}
                  qualificationEditMode={qualificationEditMode}
                  setQualificationEditMode={setQualificationEditMode}
                  setPersonalInfoEditMode={setPersonalInfoEditMode}
                />
              }
            />
          </Route>
        </Routes>
        <div className={styles["navigation-buttons"]}>
          {window.location.pathname !== "/registration/personalInfo" && (
            <button onClick={goToPreviousPage}>Previous</button>
          )}
          {window.location.pathname !== "/registration/review" && (
            <button onClick={goToNextPage}>Next</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Registration;
