import React from "react";
import CompC from "./compC";
const compB = ({ updateData }) => {
  return (
    <>
      <h2>Component B</h2>
      <CompC updateData={updateData} />
    </>
  );
};

export default compB;
