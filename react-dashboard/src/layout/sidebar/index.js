import React, { useEffect, useState } from "react";
import "./sidebar.css";
import logo from "../../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [activeClass, setActiveClass] = useState();
  useEffect(()=>{
    setActiveClass(window.location.pathname)
  },[window.location.pathname])

  const navigate = useNavigate();

  const moveToAdminMn = () =>{
    navigate("/admin_man");
  }
  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          {/* <h1>LOGO</h1> */}
          <h1>Dummy</h1>
        </div>
        <i
          onclick="closeSidebar()"
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className={`sidebar__link ${activeClass == '/' ? "active_menu_link" : ""}`}>
          <i className="fa fa-home"></i>
          <NavLink to="/">Dashboard</NavLink>
        </div>
        <h2>MNG</h2>
        <div className={`sidebar__link ${activeClass == '/tracker' ? "active_menu_link" : ""}`}>
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <NavLink to="/tracker" style={{ cursor: "pointer" }}>
            Tracker 
          </NavLink>
        </div>
        <div className={`sidebar__link ${activeClass == '/admin_man' ? "active_menu_link" : ""}`}>
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <NavLink to="/admin_man" style={{ cursor: "pointer" }}>
            Admin 
          </NavLink>
        </div>
        <div className={`sidebar__link ${activeClass == '/company_mgt' ? "active_menu_link" : ""}`}>
          <i className="fa fa-building-o"></i>
          <NavLink to="/company_mgt">Company </NavLink>
        </div>
        <div className={`sidebar__link ${activeClass == '/employee_mgt' ? "active_menu_link" : ""}`}>
          <i className="fa fa-wrench"></i>
          <NavLink to="/employee_mgt">Employee </NavLink>
        </div>
        <div className={`sidebar__link ${activeClass == '/contracts' ? "active_menu_link" : ""}`}>
          <i className="fa fa-handshake-o"></i>
          <NavLink to="/contracts">Contracts</NavLink>
        </div>
        <h2>LEAVE</h2>
        <div className={`sidebar__link ${activeClass == '/request' ? "active_menu_link" : ""}`}>
          <i className="fa fa-question"></i>
          <NavLink to="/request">Requests</NavLink>
        </div>
        <div className={`sidebar__link ${activeClass == '/leave_policy' ? "active_menu_link" : ""}`}>
          <i className="fa fa-sign-out"></i>
          <NavLink to="/leave_policy">Leave Policy</NavLink>
        </div>
        <div className={`sidebar__link ${activeClass == '/special_days' ? "active_menu_link" : ""}`}>
          <i className="fa fa-calendar-check-o"></i>
          <NavLink to="/special_days">Special Days</NavLink>
        </div>
        <div className={`sidebar__link ${activeClass == '/apply_leave' ? "active_menu_link" : ""}`}>
          <i className="fa fa-files-o"></i>
          <NavLink to="/apply_leave">Apply for leave</NavLink>
        </div>
        <h2>PAYROLL</h2>
        <div className={`sidebar__link ${activeClass == '/payroll' ? "active_menu_link" : ""}`}>
          <i className="fa fa-money"></i>
          <NavLink to="/payroll">Payroll</NavLink>
        </div>
        <div className={`sidebar__link ${activeClass == '/paygrade' ? "active_menu_link" : ""}`}>
          <i className="fa fa-briefcase"></i>
          <NavLink to="/paygrade">Paygrade</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
