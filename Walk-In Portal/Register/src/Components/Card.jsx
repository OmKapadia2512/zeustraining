import React from "react";
import './style.css'

const Card = () => {
  return (
    <div className="drives">
      <div className="d1">
        <p>Walk In For Designer Job Role</p>

        <div className="dateloca">
          <p>Date & Time :</p>
          <div className="dateloc1">
            <p className="date">10-Jul-2023 to 10-Jul-2023</p>
            <p className="location">
  
            </p>
            <p>Mumbai</p>
          </div>
        </div>

        <hr />

        <div className="jobroles">
          <p>Job Roles :</p>
          <div className="role">
            <div className="role1">
              <div className="outercircle">

              </div>
              <p>Software Engineer</p>
            </div>
            
            <div className="role1">
              <div className="outercircle">

              </div>
              <p>Software Engineer</p>
            </div>

            <div className="role1">
              <div className="outercircle">

              </div>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>

        <div className="extrainfo">
          <p>Internship Opportunity for MCA Students</p>
        </div>

        <div className="showmore">
          <a href="drives/123">
            <button>VIEW MORE DETAILS</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
