import React from "react";

import "./errorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <img
        className="error-image"
        src={process.env.PUBLIC_URL + "/images/errorImage.webp"}
        alt="Error image"
      />
    </div>
  );
};

export default ErrorPage;
