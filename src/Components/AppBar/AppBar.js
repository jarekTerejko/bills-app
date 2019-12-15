import React from "react";
import "./AppBar.css";

const AppBar = () => {
  return (
    <div className="AppBar">
      <div className="container">
        <div
          className="mx-auto"
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: ".25rem"
          }}
        >
          <a href="/" className="AppBar-logo navbar-brand ">
            Bills App
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
