import React from "react";
import { useState } from "react";

const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState('light.jpg');
    const toggleFunction = () => {
        if(toggleIcon==='light.jpg'){
            setToggleIcon('dark.jpg');
        }
        if(toggleIcon==='dark.jpg'){
            setToggleIcon('light.jpg');
        }
    }

  return (
    <>
      <div id="namelogo">
        <h1>deepansh</h1>
      </div>

     <div id='nav-buttons'>
        <a href="gfg.com">articles</a>
        <span>|</span>
        <a href="/home">home</a>
        <span>|</span>
        <a href="blog.com">blog</a>
        <span>|</span>
        <a href="contact">contact</a>

        <button id="theme-change-btn" onClick={toggleFunction}>{toggleIcon}</button>
     </div>
    </>
  );
};

export default NavBar;
