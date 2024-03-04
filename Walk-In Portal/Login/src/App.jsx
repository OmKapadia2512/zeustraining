import React from "react";
import { createRoot } from "react-dom/client";
import Login from "./Components/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Amplify } from 'aws-amplify'

console.log("hello")



const App = () => (
  <>
    <Router>
      <Login />
    </Router>
  </>
);
createRoot(document.getElementById("app")).render(<App />);
