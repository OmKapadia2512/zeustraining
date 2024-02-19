import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Registration from "./Registration";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client

const App = () => {
  return (
    <Router>
      <Registration />
    </Router>
  );
};

const rootElement = document.getElementById("app");
createRoot(rootElement).render(<App />);

