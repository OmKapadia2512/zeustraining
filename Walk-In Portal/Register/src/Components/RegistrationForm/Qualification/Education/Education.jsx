import React from "react";
import styles from "./E_style.module.css"; 
import useEducationStore from "../../Store/educationStore"

const Education = () => {
  const {
    listUp,
    showEducationDialog,
    yearOfPassing,
    qualification,
    stream,
    college,
    collegeLocation,
    setField
  } = useEducationStore();

  const openBox1 = () => {
    setField('showEducationDialog', !showEducationDialog);
    setField('listUp', !listUp);
  };

  return (
    <div>
      <div className={styles.accordion}>
        <span className={styles.heading}>Educational Qualifications</span>
        <img
          src="../asset/arrow-down.svg"
          alt="Expand"
          onClick={openBox1}
          style={{ display: listUp ? "block" : "none" }}
        />
        <img
          onClick={openBox1}
          alt="Collapse"
          style={{ display: listUp ? "none" : "block" }}
        />
      </div>

      <div
        className={styles["accordion-item"]}
        style={{ display: showEducationDialog ? "block" : "none" }}
      >
        <div className={styles["input-group"]}>
          <label>Year of Passing*</label>
          <select
            name="yearOfPassing"
            className={styles["year-of-passing-input"]}
            value={yearOfPassing}
            onChange={(e) => setField('yearOfPassing', e.target.value)}
          >
            <option value="2020">2020</option>
          </select>
        </div>

        <div className={styles["horizontal-flex-container"]}>
          <div className={styles.child1}>
            <div className={styles["input-group"]}>
              <label>Qualification*</label>
              <select
                name="qualification"
                className={styles["select-box"]}
                value={qualification}
                onChange={(e) => setField('qualification', e.target.value)}
              >
                <option value="Bachelor in Technology (B.Tech)">
                  Bachelor in Technology (B.Tech)
                </option>
              </select>
            </div>
          </div>
          <div className={styles.child2}>
            <div className={styles["input-group"]}>
              <label>Stream*</label>
              <select
                name="stream"
                className={styles["select-box"]}
                value={stream}
                onChange={(e) => setField('stream', e.target.value)}
              >
                <option value="Information Technology">Information Technology</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles["horizontal-flex-container"]}>
          <div className={styles.child1}>
            <div className={styles["input-group"]}>
              <label>College*</label>
              <select
                className={styles["select-box"]}
                value={college}
                onChange={(e) => setField('college', e.target.value)}
              >
                <option value="Pune Institute of Technology (PIT)">Pune Institute of Technology (PIT)</option>
              </select>
            </div>
          </div>
          <div className={styles.child2}>
            <div className={styles["input-group"]}>
              <label>If others, please enter your college name*</label>
              <input
                type="text"
                placeholder=""
                value={college}
                onChange={(e) => setField('college', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="location">Where is your college located?*</label>
          <input
            className={styles["college-location-input"]}
            type="text"
            placeholder="Mumbai"
            value={collegeLocation}
            onChange={(e) => setField('collegeLocation', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
