import React from "react";
import "./style.css";

// Jumbotron function
function Jumbotron() {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        {/* Title Text */}
        <h1>(React) Google Books Search</h1>
        <p className="lead">Search for and Save Books of Interest</p>
      </div>
    </div>
  );
}

export default Jumbotron;
