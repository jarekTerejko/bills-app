import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  return (
    <div className="bg-dark py-3">
      <p className="text-white text-center my-0">
        &copy; Jarosław Terejko {year}
      </p>
    </div>
  );
};

export default Footer;