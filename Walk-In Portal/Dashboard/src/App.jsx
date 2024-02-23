import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router,Routes, Route, Link, useNavigate } from "react-router-dom";


import Dashboard from "./Dashboard";


const App = () => (
  <Router>
  <Routes>
  <Route path="/driveList/*" element={<Dashboard/>} />
  </Routes>
</Router>
);

createRoot(document.getElementById("app")).render(<App />);
