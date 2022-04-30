import React from "react";
import "./homeBanner.css";
const HomeBanner = () => {
  // const myStyle = {
  //   backgroundImage: "url('5th.png')",
  //   height: "50vh",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <div className="has-bg-img">
      <img
        className="bg-img"
        src={process.env.PUBLIC_URL + "/images/5th.png"}
        alt="..."
      />
    </div>
  );
};

export default HomeBanner;
