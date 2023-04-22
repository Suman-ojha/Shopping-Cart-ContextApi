import React from "react";
// import { MyContext,MyContext1 } from './compA'
const compC = ({ updateData }) => {
  const handleButtonClick = () => {
    const newData = "Hello, world! from component C";
    updateData(newData);
  };

  return (
    <div>
      <h3>Component C</h3>
      <button onClick={handleButtonClick}>Send Data to Component A</button>
    </div>
  );
};

export default compC;
