import React from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "DashboardMFE/Dashboard";
// import DriveList from "DashboardMFE/DriveList";
// import DriveDetail from "DashboardMFE/DriveDetail";
// import ApplicationSuccessDetails from "DashboardMFE/ApplicationSuccessDetails";
import Login from "LoginMFE/Login";

import Registration from "RegistrationMFE/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => (
  <Router>
    <div style={{width:"90%", margin:"auto"}}>
      <Routes>
        <Route path="/driveList/*" element={<Dashboard />} />
      </Routes>
    </div>

    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/registration/*" element={<Registration />} />
  
    </Routes>
  </Router>
);

createRoot(document.getElementById("app")).render(<App />);
