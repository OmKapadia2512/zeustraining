import React, { useState } from "react";
// import "./style.css";
import Education from "./Education/Education";
import Professional from "./Professional/Professional";

const Qualifications = () => {

 

  return (
    <div className="qualification" style={{width:"94%",margin:"auto"}}>
      <Education/>
      {/* <Professional/> */}
    </div>
  );
};

export default Qualifications;
