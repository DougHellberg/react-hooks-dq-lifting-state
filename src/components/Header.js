import React, { useState } from "react";
import Menu from "./Menu";

function Header(props) {
  console.log(props)
  

  return (
    <div className={`ui fixed menu ${props.darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode ={props.darkMode} dmCallback ={props.dmCallback} />
      </div>
    </div>
  );
  }

export default Header;
