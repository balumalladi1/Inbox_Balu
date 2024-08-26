import React from 'react'
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import "./index.css"

const Sidebar = () => {
  return (
    <div className='side-bar-container'>
        <RiHome5Fill size={30}/>
        <RiUserSearchLine size={30} />
        <RiMailFill size={30} />
        <IoIosSend size={30}/>
        <SiElasticstack size={30}/>
        <FaInbox size={30}/>
        <IoStatsChartSharp size={30}/>
    </div>
  )
}

export default Sidebar