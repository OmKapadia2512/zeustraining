import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDriveStore } from "../../Store/store";

const DriveCard = ({ id, showButton, drive }) => {
  const navigateTo = useNavigate();
  const { applyDrive } = useDriveStore();
  const jobRoleStyle = showButton ? {} : { color: "#1F7A54" };

  const handleApply = async () => {
    const walkInDriveId = parseInt(drive.id); 
    const timeSlotId = parseInt(applyDrive.time_slot_id); 
    const jobRoleId = parseInt(applyDrive.job_role_id); 

    if (!timeSlotId || !jobRoleId) {
      alert("Please select time slot and job role before applying.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/graphql",
        {
          query: `
            mutation ApplyDrive($appliedDriveInput: appliedDriveInput!) {
              appliedDrive(appliedDriveInput: $appliedDriveInput)
            }
          `,
          variables: {
            appliedDriveInput: {
              user_id: 2,
              walk_in_drive_id: walkInDriveId, 
              time_slot_id: timeSlotId,
              job_role_id: jobRoleId,
              updated_resume: "hello_om.pdf", 
            },
          },
        },
        {
          headers: {
            "x-api-key": "dummy-api-key",
          },
        }
      );

      console.log("Applied successfully:", response.data);
    } catch (error) {
      console.error("Error applying to drive:", error);
    }
  };

  return (
    <div className={styles.drives}>
      <div className={styles.d1}>
        <div className={styles.header}>
          <p>{drive.drive_title}</p>
          {!showButton && <button onClick={handleApply}>Apply</button>}
        </div>

        <div className={styles.dateloca}>
          <p>Date & Time :</p>
          <div className={styles.dateloc1}>
            <p className={styles.date}>
              {drive.start_date} to {drive.end_date}
            </p>
            <p className={styles.location}>{drive.location}</p>
          </div>
        </div>

        <hr />

        <div className={styles.jobroles}>
          <p>Job Roles :</p>
          <div className={styles.role}>
            {drive.job_Roles.map((role) => (
              <div className={styles.role1} key={role.job_title}>
                <div className={styles.outercircle}></div>
                <p style={jobRoleStyle}>{role.job_title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.extrainfo}>
          <p>Internship Opportunity for MCA Students</p>
        </div>

        {showButton && (
          <div className={styles.showmore}>
            <Link to={`/driveList/${drive.guid}`}>
              <button>VIEW MORE DETAILS</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriveCard;
