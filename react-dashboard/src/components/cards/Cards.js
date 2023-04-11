import React from "react";
import "./cards.css";
import { Charts } from "../charts/Charts";

export const Cards = () => {
  const options = [
    {
      name: "Number of Subscribers",
      number: "578",
      icon:"fa fa-user-o fa-2x text-lightblue"
    },
    {
      name: "Times of Watching",
      number: "2467",
      icon:"fa fa-calendar fa-2x text-red"
    },
    {
      name: "Number of Videos",
      number: "340",
      icon:"fa fa-video-camera fa-2x text-yellow"
    },
    {
      name: "Number of Likes",
      number: "645",
      icon:"fa fa-thumbs-up fa-2x text-green"
    },
  ];
  return (
    <main>
      <div className="main__container">
        <div className="main__cards">
          {options?.map((d, i) => (
            <div className="card">
              <i
                className={d.icon}
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">{d.name}</p>
                <span className="font-bold text-title">{d.number}</span>
              </div>
            </div>
          ))}
        </div>
        <Charts/>
      </div>
    </main>
  );
};

export default Cards;
