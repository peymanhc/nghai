import React from "react";
import Banner from "../../images/banner.png";
const OffBanner = () => {
  return (
    <img
      style={{
        width: "80%",
        height: 350,
        objectFit: "cover",
        display: "flex",
        margin: "auto",
      }}
      alt="Off"
      src={Banner}
    />
  );
};

export default OffBanner;
