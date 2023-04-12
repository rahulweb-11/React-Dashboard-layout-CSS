import React from "react";
import "./sidebar.css";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar = () => {

  const navigate = useNavigate();

  const moveToAdminMn = () =>{
    navigate("/admin_man");
  }
  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
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
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="/">Dashboard</Link>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <Link to="/admin_man" style={{ cursor: "pointer" }}>
            Admin Management
          </Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <Link to="/company_mgt">Company Management</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <Link to="/employee_mgt">Employee Management</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <Link to="/contracts">Contracts</Link>
        </div>
        <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <Link to="/request">Requests</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <Link to="/leave_policy">Leave Policy</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <Link to="/special_days">Special Days</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <Link to="/apply_leave">Apply for leave</Link>
        </div>
        <h2>PAYROLL</h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <Link to="/payroll">Payroll</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <Link to="/paygrade">Paygrade</Link>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <Link to="/logout">Log out</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
