import React from "react";
import experience from "./data/experience.json";
import logo from "../../public/assets/hero/c_logo.jpg";
import certificate from '../pdf/certificate.pdf'

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1 style={{marginBottom: "15px"}}>EXPERIENCE</h1>
        <div className="card">
          <div
            className="comp-name"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "15px",
            }}
          >
            <h5>CodeClause PVT LTD</h5>
            <h5>Aug 2023 - Sep 2023</h5>
          </div>
          <div className="heading" style={{ display: "flex", gap: "10px" }}>
            <img src={logo} alt="" style={{ height: "40px" }} />
            <h4 style={{ fontStyle: "bold" }}>Web Devlopment</h4>
          </div>
          <div className="desc" style={{ marginLeft: "10px" }}>
            <p>
              -&gt; Spearheaded web Devlopment with HTML, CSS and JavaScript and
              Taiwind CSS or Responsive frontend interfaces.
            </p>
            <p>
              -&gt; A currency converter API provides real-time exchange rates,
              enabling web developers to integrate currency conversion
              functionality into their applications, supporting global
              transactions and financial calculations seamlessly.
            </p>
            <p>
              -&gt; An expense tracker API enables web developers to build
              applications that manage and categorize expenditures, providing
              features for tracking, analyzing, and reporting financial data to
              help users maintain budget control.
            </p>
            <p>
              -&gt; A real estate API allows web developers to integrate
              property listings, search functionality, and market data into
              applications, enhancing user experience with up-to-date real
              estate information and streamlined property management.
            </p>
          </div>
          <a
            href={certificate}
            download="certificate.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Certificate
          </a>
        </div>
      </div>
    </>
  );
};

export default Experience;
