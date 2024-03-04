import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "DashboardMFE/Dashboard";
import Login from "LoginMFE/Login";
import Header from "HeaderMFE/Header";
import Registration from "RegistrationMFE/Registration";
import GetSessionData from "LoginMFE/Fetch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    console.log("container")
    GetSessionData();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration/*" element={<Registration />} />
        <Route
          path="/driveList/*"
          element={
            <div style={{ width: "90%", margin: "auto" }}>
              <Dashboard />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById("app")).render(<App />);
