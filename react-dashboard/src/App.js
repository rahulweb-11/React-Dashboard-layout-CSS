import React from "react";
import "./App.css";
import { Sidebar } from "./layout/sidebar";
import Header from "./layout/header";
import { Cards } from "./components/cards/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Cards/>}/>
        <Route path="/admin_man" exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
