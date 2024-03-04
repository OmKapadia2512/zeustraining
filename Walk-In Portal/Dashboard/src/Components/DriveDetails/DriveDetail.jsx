import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreRequisitesAccordion from "./PreRequisitesAccordion/PreRequisitesAccordion";
import TimeSlot from "./TimeSlot/TimeSlot";
import JobDetailsAccordion from "./JobDetailsAccordion/JobDetailsAccordion";
import DriveCard from "../DriveCard/DriveCard";
import axios from "axios";

const DriveDetail = () => {
  const { guid } = useParams();

  const [singleDrive, setSingleDrive] = useState(null);

  const fetchSingleDrive = async () => {
    const query = `
      query GetWalkInDriveById($input: String!) {
        walkInDriveById(input: $input) {
          id
          guid
          drive_title
          start_date
          end_date
          location
          job_Roles {
            id
            job_title
            package
            job_description
            job_requirements
          }
          time_slots {
            id
            time_slot
          }
        }
      }
    `;

    try {
      const response = await axios.post(
        "http://localhost:5000/graphql",
        {
          query,
          variables: { input: guid },
        },
        {
          headers: {
            "x-api-key": "dummy-api-key",
          }
        }
      );

      // Update state with the fetched data
      setSingleDrive(response.data.data.walkInDriveById);
    } catch (error) {
      console.error("Error in fetchData:", error.message);
    }
  };

  useEffect(() => {
    fetchSingleDrive();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      {singleDrive ? (
        <>
          <DriveCard
            drive={singleDrive}
            showButton={false}
          />
          <PreRequisitesAccordion />
          <TimeSlot timeSlots={singleDrive.time_slots} job_Roles={singleDrive.job_Roles} />
          <JobDetailsAccordion jobRoles={singleDrive.job_Roles} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DriveDetail;
