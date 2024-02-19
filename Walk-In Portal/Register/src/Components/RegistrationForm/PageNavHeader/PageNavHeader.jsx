import React from "react";
import styles from './Style.module.css'

const PageNavHeader = () => {
  return (
    <>
    <div className={styles.userouter}>
      <div className={styles.navigation}>
        <div className={styles.navmain}>
        <svg
            id="back"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g id="Bounding_Boxes">
              <path
                id="Path_1831"
                data-name="Path 1831"
                d="M0,0H24V24H0Z"
                fill="none"
              />
            </g>
            <g id="Outline_1_">
              <path
                id="Path_1832"
                data-name="Path 1832"
                d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"
                fill="#3FD28B"
              />
            </g>
          </svg>
          <p>Create An Account</p>
          <div className={styles.colbtn}>
            <button className={styles.cancel}>CANCEL</button>
            <button className={styles.create} disabled>
              CREATE
            </button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.fir}>
            <p className={styles.num1}>1</p>
            <p className={styles.cont}>Personal Information</p>
          </div>
          <hr />
          <div className={styles.sec}>
            <p className={styles.num2}>2</p>
            <p className={styles.cont}>Qualifications</p>
          </div>
          <hr />
          <div className={styles.thi}>
            <p className={styles.num3}>3</p>
            <p className={styles.cont}>Review and Proceed</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PageNavHeader;
