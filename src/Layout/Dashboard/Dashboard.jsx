import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../Navbar/chunkss/Topnavbar/Topnavbar";
import SideNavBar from "../Navbar/Navbar";
import "./dashboard.scss";

const Dashboard = () => {
  const [navExpand, setnavExpand] = useState(false)
  const onclick=()=>{
    setnavExpand(!navExpand)
  }
  // console.log(navExpand);

  return (
    <div className="dashboard">
      <TopNavbar onclick={onclick} navExpand={navExpand}/>
      <SideNavBar className={navExpand? "displayBlock leftToRight" : "displayNone"}/>
      <Outlet />
    </div>
  );
};

export default Dashboard;
