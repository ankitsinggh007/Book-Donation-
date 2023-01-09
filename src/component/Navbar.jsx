import React, { useState,useContext } from "react";
import { User } from "../App";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Route,Routes,Navigate, useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const {LoggedInUserData, setLoggedInUserData,createUser}=useContext(User);
  const Navigate=useNavigate();

  const Logout=()=>{
    setLoggedInUserData({isAuthrized:false});
    Navigate("/")
  }

  return (
    <>
      <nav className="main-nav" style={{position:"sticky",top:"2px"}} >
        {/* 1st logo part  */}
        <NavLink to="/" className="logo">
          <h2>
            <span>B</span>ook
            <span>D</span>onation
          </h2>
        </NavLink>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            
          </ul>
        </div>
      {!LoggedInUserData.isAuthrized? <NavLink to="/login"> <button type="button" class="btn btn-primary" style={{backgroundColor:"#3B71CA",position:"absolute",right:"8%",top:"25%",fontSize:"1.5rem",height:"40px",width:"auto"}}>Log In</button>
       </NavLink>:<Button onClick={Logout } style={{backgroundColor:"#3B71CA",color:"white",position:"absolute",right:"8%",top:"25%",fontSize:"1.5rem",height:"40px",width:"auto"}}>Logout
</Button>}
        {/* 3rd social media links */}
        <div className="social-media">

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
