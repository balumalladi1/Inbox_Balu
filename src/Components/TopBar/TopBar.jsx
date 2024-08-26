import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "./TopBar.css"


const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="brand-name">Onebox</div>
      <div className="workspace">
        Tim's Workspace 
        <MdOutlineKeyboardArrowDown className="arrow-icon" />
      </div>
    </div>
  );
};

export default TopBar;