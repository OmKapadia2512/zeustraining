import React from 'react'
import DriveCard from "../DriveCard/DriveCard";
import { v4 as uuidv4 } from 'uuid';



const DriveList = () => {
  const driveIds = Array.from({ length: 3 }, () => uuidv4());

  return (
    <div style={{marginTop:"20px"}}>
      {driveIds.map(id => (
        <DriveCard key={id} id={id} showButton={true} />
      ))}
    </div>
  );
}

export default DriveList;
