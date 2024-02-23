import React from "react";
import { useParams } from "react-router-dom";
import PreRequisitesAccordion from "./PreRequisitesAccordion/PreRequisitesAccordion";
import TimeSlot from "./TimeSlot/TimeSlot";
import JobDetailsAccordion from "./JobDetailsAccordion/JobDetailsAccordion";
import DriveCard from "../DriveCard/DriveCard";

const DriveDetail = () => {
    const {id} =useParams();
  return (
    <div style={{marginTop:"20px"}}>
      <DriveCard id={id} showButton={false}/>
      <PreRequisitesAccordion />
      <TimeSlot />
      <JobDetailsAccordion />
    </div>
  );
};

export default DriveDetail;
