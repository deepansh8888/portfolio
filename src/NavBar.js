import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const [toggleIcon, setToggleIcon] = useState('/techImages/light-mode.png');

    const toggleFunction = () => {
        if(toggleIcon==='/techImages/light-mode.png'){
            setToggleIcon('/techImages/dark-mode.png');
        }
        if(toggleIcon==='/techImages/dark-mode.png'){
            setToggleIcon('/techImages/light-mode.png');
        }
    }

  return (
    <div id='navbar'>
      <div id="namelogo">
        <h1 onClick={()=> navigate('/home')}>dk</h1>
      </div>

        <div id='nav-buttons'>
        <div onClick={()=>{navigate("/home")}}>home</div>
        <span>|</span>
        <a href="https://www.geeksforgeeks.org/user/deepansh8888/contributions/">articles</a>
        {/* <span>|</span>
        <a href="blog.com">blog</a> */}
        <span>|</span>
        <div onClick={()=>{navigate("/contact")}}>contact</div>
        <span>|</span>
        <div onClick={()=>navigate('/hireme')} >hire me</div>

        {/* <button id="theme-change-btn" onClick={toggleFunction}>{toggleIcon}</button> */}
        <img src={toggleIcon} onClick={toggleFunction} id="theme-change-icon"/>
     </div>
    </div>
  );
};

export default NavBar;
