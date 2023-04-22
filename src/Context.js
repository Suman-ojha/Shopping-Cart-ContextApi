import { createContext, useState } from "react";

export const MyContext = createContext({
    cart: [],
    setCart: () => {},
  });

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <MyContext.Provider value={{ cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
