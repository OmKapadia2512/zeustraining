import React from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css';

const DriveCard = ({ id, showButton }) => {
  const jobRoleStyle = showButton ? {} : { color: "#1F7A54" };
  return (
    <div className={styles.drives}>
      <div className={styles.d1}>
        <div className={styles.header}>
          <p>Walk In For Designer Job Role</p>
          {!showButton && (
            <Link to={`/driveList/${id}/hallTicket`}>
              <button>Apply</button>
            </Link>
          )}
        </div>

        <div className={styles.dateloca}>
          <p>Date & Time :</p>
          <div className={styles.dateloc1}>
            <p className={styles.date}>10-Jul-2023 to 10-Jul-2023</p>
            <p className={styles.location}>Mumbai</p>
          </div>
        </div>

        <hr />

        <div className={styles.jobroles}>
          <p>Job Roles :</p>
          <div className={styles.role}>
            <div className={styles.role1}>
              <div className={styles.outercircle}></div>
              <p style={jobRoleStyle}>Instructional Designer</p>
            </div>
            <div className={styles.role1}>
              <div className={styles.outercircle}></div>
              <p style={jobRoleStyle}>Software Engineer</p>
            </div>
            <div className={styles.role1}>
              <div className={styles.outercircle}></div>
              <p style={jobRoleStyle}>Software Quality Engineer</p>
            </div>
          </div>
        </div>

        <div className={styles.extrainfo}>
          <p>Internship Opportunity for MCA Students</p>
        </div>

        {showButton && (
          <div className={styles.showmore}>
            <Link to={`/driveList/${id}`}>
              <button>VIEW MORE DETAILS</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriveCard;
