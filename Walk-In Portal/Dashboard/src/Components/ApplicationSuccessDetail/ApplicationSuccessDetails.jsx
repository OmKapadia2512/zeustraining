import React from "react";
import styles from './style.module.css';

const ApplicationSuccessDetails = () => {
  return (
    <>
      <div className={styles.mainapplied}>
        <div className={styles.applieddrive}>
          <div className={styles.righticon}>
            <img src="../../../assets/check_correct.webp" alt="Check Correct" />
          </div>

          <p className={styles.heading}>
            Congratulations ! You have successfully applied for the walk-in
            opportunity
          </p>

          <hr />

          <div className={styles.details}>
            <div className={styles.datetime}>
              <p className={styles.title}>Date & Time of Walk-In :</p>
              <p className={styles.date}>03rd July 2021</p>
              <p className={styles.time}>9:00 AM to 11:00 AM</p>
            </div>

            <hr />

            <div className={styles.venue}>
              <p className={styles.title}>Venue of Walk-In :</p>
              <p className={styles.address}>
                Zeus Systems Pvt. Ltd. 1402, 14th Floor, Tower B, Peninsula
                Business Park. Ganpatrao Kadam Marg Lower Parel (W) Mumbai - 400
                013 Phone: +91-22-66600000
              </p>
            </div>

            <hr />

            <div className={styles.remember}>
              <p className={styles.title}>THINGS TO REMEMBER :</p>

              <div className={styles.things}>
                <p>- Please report 30 MINUTES prior to your reporting time.</p>
                <p>
                  - Download your Hall Ticket from below and carry it with you
                  during your Walk-In.
                </p>
              </div>
            </div>

            <hr />
          </div>

          <div className={styles.hallticket}>
            <button className={styles.download}>DOWNLOAD HALL TICKET</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationSuccessDetails;
