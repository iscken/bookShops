import { CiSearch } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";

import { FaRegUserCircle } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import React from 'react';
import "./Header.css";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../img/National_Book_Store_2016_logo.svg.png"

 const Header = ({setValue}) => {

   let nav = useNavigate()
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                <img className='logo' src={logo} alt="" />
           <div className="headerPages">

           <div className="search">
            <input  type="text" onChange={(e) => setValue(e.target.value)} placeholder='Search'/>
            <button onClick={() => {
                nav("/Search")
            }} className="searchBtn"><CiSearch/></button>
            </div>

          <nav>
          <div className="basket">
           <button className="btnBasket"> <SlBasket /></button>
            <NavLink to="/basket"><h2>Basket</h2></NavLink>
            </div>
         <div className="admin">
         <button className="addBook"><FaAddressBook /></button>
           <NavLink to="/admin"><h2>ADD</h2></NavLink>
         </div>
           <div className="admin">
          <button className="userBtn"><FaRegUserCircle /></button>
           <NavLink to ="/modal"><h2>Admin</h2></NavLink>
           </div>

          </nav>
           </div>
                </div>
            </div>
           
        </header>
    );
};

export default Header;