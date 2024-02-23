import React, { useState } from "react";
import styles from "./style.module.css";

const TimeSlot = () => {
  const [detailsShow, setDetailsShow] = useState(false);

  const handleToggle = () => {
    setDetailsShow((prevValue) => !prevValue);
  };

  return (
    <div className={styles.onedrive}>
      <div className={styles.timeSlotAccordion}>
        <div className={styles.accordionTitle}>
          <p>Time Slots and Preference</p>
          <div className={styles.toggleButton} onClick={handleToggle}>
            {detailsShow ? (
              <img
                src="../../../../assets/icons/list-up.svg"
                alt="toggle-icon"
              />
            ) : (
              <img
                src="../../../../assets/icons/list-down.svg"
                alt="toggle-icon"
              />
            )}
          </div>
        </div>
      </div>
      {detailsShow && (
        <div className={styles.times}>
          <div className={styles.time}>
            <p>Select a Time Slot :</p>
            <div className={styles.options}>
              <div className={styles.op1}>
                <input type="radio" name="time" id={styles.time1} value="9-11AM" />
                <label htmlFor={styles.time1}>9:00 AM to 11:00 AM</label>
              </div>

              <div className={styles.op1}>
                <input type="radio" name="time" id={styles.time2} value="11-1PM" />
                <label htmlFor={styles.time2}>11:00 AM to 1:00 PM</label>
              </div>

              <div className={styles.op1}>
                <input type="radio" name="time" id={styles.time3} value="1-3PM" />
                <label htmlFor={styles.time3}>1:00 PM to 3:00 PM</label>
              </div>
            </div>
          </div>

          <hr />

          <div className={styles.preference}>
            <p>Select Your Preference :</p>
            <div className={styles.options}>
              <div className={styles.op1}>
                <input
                  type="checkbox"
                  id={styles.option1}
                  name="option1"
                  value="Instructional Designer"
                />
                <label htmlFor={styles.option1}>Instructional Designer</label>
              </div>

              <div className={styles.op1}>
                <input
                  type="checkbox"
                  id={styles.option2}
                  name="option2"
                  value="Instructional Designer"
                />
                <label htmlFor={styles.option2}>Instructional Designer</label>
              </div>

              <div className={styles.op1}>
                <input
                  type="checkbox"
                  id={styles.option3}
                  name="option3"
                  value="Instructional Designer"
                />
                <label htmlFor={styles.option3}>Instructional Designer</label>
              </div>
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
