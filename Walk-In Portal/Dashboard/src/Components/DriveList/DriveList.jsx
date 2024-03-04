import React, { useEffect, useState } from "react";
import DriveCard from "../DriveCard/DriveCard";
import { useDriveStore } from "../../Store/store";
import axios from "axios";

const DriveList = () => {
  // const { drives, setDrives } = useDriveStore();
  const [drives,setDrives]=useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/graphql",
          {
            query: `
              query {
                allWalkInDrives {
                  id
                  guid
                  drive_title
                  start_date
                  end_date
                  location
                  job_Roles{
                    job_title
                  }
                }
              }
            `
          },{
            headers: {
              "x-api-key": "dummy-api-key" 
            }
          }
        );
        
        setDrives(response.data.data.allWalkInDrives);
      } catch (error) {
        console.error("Error fetching drives:", error);
      }
    };
    fetchData();
  }, []);
  console.log("driveList")

  return (
    <div style={{ marginTop: "20px" }}>
      {drives &&
        drives.map((drive,index) => (
          <DriveCard key={index} drive={drive} showButton={true} />
        ))}
    </div>
  );
};

export default DriveList;
