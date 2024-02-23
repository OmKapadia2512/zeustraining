import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Registration from "./Registration";
import { createRoot } from "react-dom/client"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registration/*" element={<Registration/>} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById("app");
createRoot(rootElement).render(<App />);

