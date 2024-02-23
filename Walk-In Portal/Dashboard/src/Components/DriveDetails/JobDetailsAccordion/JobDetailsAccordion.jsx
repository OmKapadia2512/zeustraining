import React, { useState } from "react";
import styles from "./style.module.css";

const JobDetailsAccordion = () => {
  const [detailsShow, setDetailsShow] = useState(false);

  const handleToggle = () => {
    setDetailsShow((prevValue) => !prevValue);
  };

  return (
    <div className={styles.onedrive}>
      <div className={styles.jobDetailsAccordion}>
        <div className={styles.accordionTitle}>
          <p>Software Engineer</p>
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
        <div className={styles.role1}>
          <div className={styles.details}>
            <div className={styles.package}>
              <p className={styles.title}>Gross Compensation Package :</p>
              <p className={styles.cont}>Rs. 5,00,000 lpa</p>
            </div>

            <hr />

            <div className={styles.descript}>
              <p className={styles.title}>Role Description :</p>
              <div className={styles.desc}>
                <p>
                  - Generate highly interactive and innovative instructional
                  strategies for e-learning solutions
                </p>
                <p>
                  - Generate highly interactive and innovative instructional
                  strategies for e-learning solutions
                </p>
              </div>
            </div>

            <hr />

            <div className={styles.requirement}>
              <p className={styles.title}>Role Description :</p>
              <div className={styles.desc}>
                <p>
                  - Generate highly interactive and innovative instructional
                  strategies for e-learning solutions
                </p>
                <p>
                  - Generate highly interactive and innovative instructional
                  strategies for e-learning solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailsAccordion;
