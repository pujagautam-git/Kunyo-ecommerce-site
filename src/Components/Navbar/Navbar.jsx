import React from 'react'
import { useState } from "react";
import { FiUser, FiShoppingCart, FiMapPin } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
   const [activeMenu,setActiveMenu] =useState(null);
  return (
    <>
    <div className="top-header">
  <p className="offer-text">
    Sign Up & Get <span>200 NRS Off</span>
  </p>

  <ul className="top-links">
    <li>Call Us: 98XXXXXXXX</li>
    <li>Store Location</li>
    <li>Track an Order</li>
  </ul>
</div>
<div className="main-navbar">
  {/* Logo */}
  <div className="logo">
    <img src="/logo.png" alt="PlayStation Store" />
  </div>

  {/* Search */}
  <div className="search-box">
    <input type="text" placeholder="Search games, consoles, accessories..." />
    <button>Search</button>
  </div>

  {/* Icons */}
  <div className="nav-icons">
    <span>Login</span>
    <span>Wishlist</span>
    <span>Cart (0)</span>
  </div>
</div>
<div className="category-menu">
  <ul>
    <li
     className="pc-item"
  onMouseEnter={() => setActiveMenu("laptop")}
  onMouseLeave={() => setActiveMenu(null)}
>
    <span className="dropdown">
    Laptop Zone
     <MdKeyboardArrowDown /></span>
      {activeMenu==="laptop" && (
          <ul className="dropdown-menu">
        <li>Gaming Laptop</li>
        <li>Office Laptop</li>
         <li>Student Laptop</li>
      </ul>
          )}
     </li>
    <li>Mobile</li>
    <li>Gaming Monitor</li>

    <li 
    className="pc-item"
  onMouseEnter={() => setActiveMenu("Gamingpc")}
  onMouseLeave={() => setActiveMenu(null)}
>
    <span className="dropdown">
        Gaming PC
         <MdKeyboardArrowDown />
         </span>

          {activeMenu==="Gamingpc" && (
          <ul className="dropdown-menu">
        {/* <li>Prebuilt Gaming PC</li> */}
        <li>Custom PC</li>
        <li>Graphics Card</li>
        <li>Processor</li>
        <li>RAM</li>
        <li>Storage</li>   
        <li>Motherboard</li>
        {/* <li>Power Supply</li> */}
      </ul>
          )}
    </li>
          
    <li>Accessories</li>
  </ul>
</div>

</>
  )
}

export default Navbar