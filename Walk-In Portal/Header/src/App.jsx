import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Components/Header";

const App = () => (
  <>
    <Header />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
