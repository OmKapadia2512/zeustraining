import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useDriveStore } from "../../../Store/store";

const TimeSlot = ({ timeSlots, job_Roles }) => {
  console.log("TimeSlot Component")
  const { applyDrive, setApplyDrive } = useDriveStore();
  const [detailsShow, setDetailsShow] = useState(false);


  useEffect(() => {
    setApplyDrive({});
  }, []);

  const handleToggle = () => {
    setDetailsShow((prevValue) => !prevValue);
  };

  const handleTimeSlotSelection = (event) => {
    const selectedId = event.target.value;
    setApplyDrive({ ...applyDrive, time_slot_id: selectedId });
  };

  const handleJobRoleChange = (e) => {
    const selectedJobRole = e.target.value;
    const isChecked = e.target.checked;

    let updatedJobRoles = applyDrive.job_role_id || [];

    if (isChecked) {
      if (!updatedJobRoles.includes(selectedJobRole)) {
        updatedJobRoles = [...updatedJobRoles, selectedJobRole];
      }
    } else {
      updatedJobRoles = updatedJobRoles.filter(
        (role) => role !== selectedJobRole
      );
    }
    
    setApplyDrive({ ...applyDrive, job_role_id: updatedJobRoles });
  };

  return (
    <div className={styles.onedrive}>
      <div className={styles.timeSlotAccordion}>
        <div className={styles.accordionTitle}>
          <p>Time Slots and Preference</p>
          <div className={styles.toggleButton} onClick={handleToggle}>
            {detailsShow ? (
              <img src="../../../../assets/icons/list-up.svg" alt="toggle-icon" />
            ) : (
              <img src="../../../../assets/icons/list-down.svg" alt="toggle-icon" />
            )}
          </div>
        </div>
      </div>
      {detailsShow && (
        <div className={styles.times}>
          <div className={styles.time}>
            <p>Select a Time Slot :</p>
            <div className={styles.options}>
              {timeSlots && timeSlots.map((slot, index) => (
                <div key={index} className={styles.op1}>
                  <input
                    type="radio"
                    name="time"
                    id={`time${index}`}
                    value={slot.id} 
                    onChange={handleTimeSlotSelection}
                  />
                  <label htmlFor={`time${index}`}>{slot.time_slot}</label>
                </div>
              ))}
            </div>
          </div>

          <hr />

          <div className={styles.preference}>
            <p>Select Your Preference :</p>
            <div className={styles.options}>
              {job_Roles && job_Roles.map((role, index) => (
                <div key={index} className={styles.op1}>
                  <input
                    type="checkbox"
                    id={`jobRole${index}`}
                    name="jobRole"
                    value={role.id}
                    onChange={handleJobRoleChange}
                  />
                  <label htmlFor={`jobRole${index}`}>{role.job_title}</label>
                </div>
              ))}
            </div>
          </div>

          <hr />

          <div className={styles.resumeUpload}>
            <p>Upload Updated Resume</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlot;
