import React from "react";
import Education from "./Education/Education";
import Professional from "./Professional/Professional";

const Qualifications = ({ editMode }) => {
  return (
    <div className="qualification" style={{width:"94%",margin:"auto"}}>
      <Education editMode={editMode} />
      <Professional editMode={editMode} />
    </div>
  );
};

export default Qualifications;
