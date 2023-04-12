import React from "react";
import "./App.css";
import { Sidebar } from "./layout/sidebar";
import Header from "./layout/header";
import { Cards } from "./components/cards/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminManagement } from "./pages/AdminManagement";
import { CompanyManagement } from "./pages/CompanyManagement";
import { EmployeeManagement } from "./pages/EmployeeManagement";
import { Contracts } from "./pages/Contracts";
import { Requests } from "./pages/Requests";
import { LeavePolicy } from "./pages/LeavePolicy";
import { SpecialDays } from "./pages/SpecialDays";
import { ApplyLeave } from "./pages/ApplyLeave";
import { Payroll } from "./pages/Payroll";
import { Paygrade } from "./pages/Paygrade";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" exact element={<Cards/>}/>
        <Route path="/admin_man" exact element={<AdminManagement/>}/>
        <Route path="/company_mgt" exact element={<CompanyManagement/>}/>
        <Route path="/employee_mgt" exact element={<EmployeeManagement/>}/>
        <Route path="/contracts" exact element={<Contracts/>}/>
        <Route path="/request" exact element={<Requests/>}/>
        <Route path="/leave_policy" exact element={<LeavePolicy/>}/>
        <Route path="/special_days" exact element={<SpecialDays/>}/>
        <Route path="/apply_leave" exact element={<ApplyLeave/>}/>
        <Route path="/payroll" exact element={<Payroll/>}/>
        <Route path="/paygrade" exact element={<Paygrade/>}/>
        <Route path="/logout" exact/>
      </Routes>
    </div>
  );
}

export default App;
