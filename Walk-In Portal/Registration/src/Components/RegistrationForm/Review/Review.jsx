import React from "react";
import styles from "./style.module.css";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Qualifications from "../Qualification/Qualification";

const Review = ({ personalInfoEditMode, qualificationEditMode, setQualificationEditMode, setPersonalInfoEditMode }) => {
  const togglePersonalInfoEditMode = () => {
    setPersonalInfoEditMode(prevEditMode => !prevEditMode);
  };

  const toggleQualificationEditMode = () => {
    setQualificationEditMode(prevEditMode => !prevEditMode);
  };

  return (
    <div className={styles.review}>
      <div className={styles.personal}>
        <div className={styles.title}>
          <p>Personal Information</p>
          <button onClick={togglePersonalInfoEditMode}>{personalInfoEditMode ? "Edit" : "Save"}</button>
        </div>
        <PersonalInfo editMode={personalInfoEditMode} />
      </div>
      <div className={styles.personal}>
        <div className={styles.title}>
          <p>Qualification</p>
          <button onClick={toggleQualificationEditMode}>{qualificationEditMode ? "Edit" : "Save"}</button>
        </div>
        <Qualifications editMode={qualificationEditMode} />
      </div>
    </div>
  );
};

export default Review;
 