import React from "react";
import "./charts.css";

export const Charts = () => {

    const reports = [{
        name:"Income",
        amount:"$75,300",
        color:'card1'
    },
    {
        name:"Sales",
        amount:"$124,200",
        color:'card2'
    },
    {
        name:"Users",
        amount:"39,00",
        color:'card3'
    },
    {
        name:"Orders",
        amount:"1881",
        color:'card4'
    }]
  return (
    <div className="charts">
      <div className="charts__left">
        <div className="charts__left__title">
          <div>
            <h1>Daily Reports</h1>
            <p>lorem ipsum</p>
          </div>
          <i className="fa fa-usd" aria-hidden="true"></i>
        </div>
        <div id="apex1"></div>
      </div>

      <div className="charts__right">
        <div className="charts__right__title">
          <div>
            <h1>Stats Reports</h1>
            <p>lorem ipsum</p>
          </div>
          <i className="fa fa-usd" aria-hidden="true"></i>
        </div>

        <div className="charts__right__cards">
            {reports?.map((d,i)=>
            <div className={d.color}>
            <h1>{d.name}</h1>
            <p>{d.amount}</p>
          </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Charts;
