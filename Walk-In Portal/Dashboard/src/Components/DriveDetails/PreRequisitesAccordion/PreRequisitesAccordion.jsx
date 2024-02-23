import React, { useState } from "react";
import styles from "./style.module.css";

const PreRequisitesAccordion = () => {
  const [detailsShow, setDetailsShow] = useState(false);

  const handleToggle = () => {
    setDetailsShow((prevValue) => !prevValue);
  };

  return (
    <div className={styles.onedrive}>
      <div className={styles.prereq}>
        <div className={styles.head}>
          <p>Pre-requisites & Application Process</p>
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
        {detailsShow && (
          <div className={styles.details}>
            <div className={styles.general}>
              <p>General Instructions :</p>
              <div className={styles.info + " " + styles.ou1}>
                <p>
                  - We have a two year indemnity for permanent candidates. We
                  will provide training to the selected candidates.
                </p>
                <p>
                  - Candidates who have appeared for any test held by Zeus
                  Learning in the past 12 months will not be allowed to appear
                  for this recruitment test.
                </p>
              </div>
            </div>

            <hr />

            <div className={styles.examinstru}>
              <p>Instructions for the Exam :</p>
              <div className={styles.instructions + " " + styles.ou1}>
                <p>
                  - Candidates are requested to log in half an hour prior to the
                  exam start time as they would need to capture their image
                  using a web camera. By taking this test, you are permitting
                  the examination system to capture your video for invigilation
                  purposes.
                </p>
              </div>
            </div>

            <hr />

            <div className={styles.minrequire}>
              <p>Minimum System Requirements :</p>
              <div className={styles.require + " " + styles.ou1}>
                <p>
                  - Personal Laptop or Desktop computer in working condition
                  with good quality camera (you can use Windows 7 and above).
                </p>
              </div>
            </div>

            <hr />

            <div className={styles.process}>
              <p>process :</p>
              <div className={styles.infoo}>
                <p>
                  - Every round is an elimination round. Candidates need to
                  clear all rounds to get selected.
                </p>
                <div className={styles.round}>
                  <p>Round I : 4th August, 2018</p>
                  <p>Aptitude Test : 25 Questions</p>
                </div>
                <div className={styles.round}>
                  <p>Round II (Interview) : 4th August, 2018.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreRequisitesAccordion;
