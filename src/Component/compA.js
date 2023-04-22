import React, { useState } from "react";
import CompB from "./compB";
// export const MyContext = React.createContext("default");
// export const MyContext1 = React.createContext("default");
const CompA = () => {
  const [data, setData] = useState(null);

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h1>Component A</h1>
      <CompB updateData={updateData} />
      <p>Data received from Component C: {data}</p>
    </div>
  );
};

export default CompA;
