import React from "react";
import "./style.css";
import loading from "../../images/logo1.png";
const LoadingPage = () => {
  return (
    <section className="wrapper">
      <img width="130px" alt="loading" src={loading} />
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default LoadingPage;
