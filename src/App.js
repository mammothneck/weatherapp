import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        
         Copyright &copy; {" "}
        
          Siddartha Aggarwal
        {" "}
        <a target="_blank" href="https://www.linkedin.com/in/siddartha-aggarwal-3a14941bb/">
         | LinkedIn
        </a>{" "}
        <a target="_blank" href="https://github.com/mammothneck">
         | GitHub
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
