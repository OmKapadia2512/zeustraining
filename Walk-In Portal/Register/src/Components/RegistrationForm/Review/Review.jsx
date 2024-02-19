import React from "react";
import "./style.css";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

const Review = ({ editMode, setEditMode }) => {
  const toggleEditMode = () => {
    setEditMode(prevEditMode => !prevEditMode);
  };

  return (
    <div className="review">
      <div className="personal">
        <div className="title">
          <p>Personal Information</p>
          <button onClick={toggleEditMode}>{editMode ? "Save" : "Edit"}</button>
        </div>
        <PersonalInfo editMode={editMode} />
      </div>
    </div>
  );
};

export default Review;
