import React from "react";
import search from "../assets/Icons/Search.svg";
import Button from "./Button";
import trend from "/src/assets/trends.json";
import tips from "../assets/tips.js";
import Widget from "../components/Trendscontenair";
import Titres from "./Titres";
import settings from "../assets/Icons/Settings.svg";
import isVerified from "../assets/Icons/Verified.svg";

export default function widgets() {
  return (
    <div className="widgets-bloc">
      <div>
        <span className="search-bloc">
          <input
            className="search-btn"
            type="search"
            placeholder="Search twitter"
          />
          <img className="search-icon" src={search} />
        </span>
      </div>
      <Widget wd="pd-wedget">
        <Titres tips="title-tips" Name={"Trends for you"} Icon={settings} />
        <>
          {tips.map((item) => (
            <div className="tips">
              <p className="tipstext">
                {item.name}
                <img src={item.icon} />
              </p>
              <p>{item.hash}</p>
              <p>{item.tweets}</p>
            </div>
          ))}
          <Button btntips="btn-tips" name={"Show more"} />
        </>
      </Widget>
      <Widget>
        <Titres tips="title-tips" Name={"Who to follow"} />
        {trend.map((item) => (
          <div className="trend">
            <div><img className="profile" src={item.author_avatar}/></div>
            {item.isVerified && <div><p>{item.source} <img src={isVerified} /></p>
            <p>@{item.source} </p>
            </div>}
            <div></div>
          </div>
        ))}
      </Widget>
    </div>
  );
}
