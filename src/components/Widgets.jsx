import React from "react";
import { Link } from "react-router-dom";
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
        <div className="hovertips">
          {tips.map((item) => (
            <div className="tips">
              <p className="tipstext">
                {item.name}
                <img src={item.icon} />
              </p>
              <p className="hash">{item.hash}</p>
              <p>{item.tweets}</p>
            </div>
          ))}
          <Button btntips="btn-tips" name={"Show more"} />
        </div>
      </Widget>
      <Widget  >
        <Titres tips="titletips" Name={"Who to follow"} />
        {trend.map((item) => (
          <div className="trend + sb">
            <div className="trend"><img  className="profile + pd " src={item.author_avatar}/>
            <span className="pd ">{item.source} {item.isVerified &&  <img src={isVerified} />}</span></div>
            <span className="p"><Button pdBtn="pd-btn" name={"Follow"} /></span>
          </div>
        ))}
          <Button btntips="btn-tips" name={"Show more"} />
      </Widget>
      <div className=" footer">
        <Link className="liens"> Term of service  </Link>
        <Link className="liens"> Privacy policy </Link>
        <Link className="liens"> Cookie policy </Link>
        <Link className="liens">Imprint </Link>
        <Link className="liens"> Ads info</Link>
        <Link className="liens"> More... </Link>
        <Link className="liens"> 2021 Twitter, Inc. </Link>
      </div>
    </div>
  );
}
