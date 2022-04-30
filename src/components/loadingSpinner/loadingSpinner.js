import React from "react";
import "./spinner.css";

export default function LoadingSpinner(prop) {
  return (
    <>
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
      <div className="spinner-container2">
        <p>{prop.name}</p>
      </div>
    </>
  );
}