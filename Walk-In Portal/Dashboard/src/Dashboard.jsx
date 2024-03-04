import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Routes, Route, Link, useNavigate } from "react-router-dom";

import "./index.css";
import DriveList from "./Components/DriveList/DriveList";
import DriveDetail from "./Components/DriveDetails/DriveDetail";
import ApplicationSuccessDetails from './Components/ApplicationSuccessDetail/ApplicationSuccessDetails'


const Dashboard = () => (
  <div className="container">
    
    <Routes>
      <Route path="/" element={<DriveList/>} />
      <Route path=":guid" element={<DriveDetail/>} />
      <Route path="hallTicket" element={<ApplicationSuccessDetails/>} />
    </Routes>
    
  </div>
);


export default Dashboard



