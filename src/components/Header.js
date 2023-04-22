import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './style.css';
import {MyContext}  from "../Context";
const Header = () => {
    const {cart,setCart}=useContext(MyContext);
  return (
    <>
      <span className="header"> React Context Api Practical</span>
      <ul className="nav">
        <li >
          <Link to="/">Home</Link>
        </li>
        <li >
          <Link to="/cart">Cart {cart.length>0?`(`+(cart.length)+`)`:''}</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
