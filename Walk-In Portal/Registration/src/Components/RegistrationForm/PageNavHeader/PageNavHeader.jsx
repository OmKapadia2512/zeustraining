import React from "react";
import styles from "./Style.module.css";
import constructMutationObject from "../../../mutationDataBuilder";
import usePersonalInfoStore from "../Store/personalInfoStore";
import useEducationStore from "../Store/educationStore";
import useProfessionalStore from "../Store/professionalStore";
import axios from "axios";

const PageNavHeader = () => {
  const CREATE_USER_MUTATION = `
  mutation CreateUser($userInput: userInput!) {
    createUser(userInput: $userInput) {
      message
      user_id
    }
  }
  `;

  const personalInfo = usePersonalInfoStore();
  const education = useEducationStore();
  const professionalQualification = useProfessionalStore();

  const handleSubmit = async () => {
    const userInput = constructMutationObject(
      personalInfo,
      education,
      professionalQualification
    );
    
    try {
      const response = await axios.post("http://localhost:5000/graphql", {
        query: CREATE_USER_MUTATION,
        variables: { userInput },
      },{
        headers: {
          "x-api-key": "dummy-api-key",
        },
      }
      );

      console.log(response.data); // Assuming the response contains useful data
      // Optionally, you can add further logic to handle the response
    } catch (error) {
      console.error("Error while submitting:", error);
      // Optionally, you can add further logic to handle errors
    }
  };

  return (
    <>
      <div className={styles.userouter}>
        <div className={styles.navigation}>
          <div className={styles.navmain}>
            <p>Create An Account</p>
            <div className={styles.colbtn}>
              <button className={styles.cancel}>CANCEL</button>
              <button className={styles.create} onClick={handleSubmit}>
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
