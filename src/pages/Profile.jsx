import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import menu from "../assets/menuProfile";
import Titres from "../components/Titres";
import Button from "../components/Button";
import arrow from "./images/arrow-left-solid(1).svg";
import profile from "./images/book.png";
import calendar from "./images/calendar-days-solid.svg";
import Posts from './Posts'

export default function Profile() {
  return (      

    <div className="userProfile">
      <div className="id">
        <img src={arrow} alt="" />
        <div>
          <p className="userid">Jenifer Asnath</p>
          <p>0 post</p>
        </div>
      </div>
      <div className="banner">
        <img src="" alt="" />
      </div>
      <div>
        <div className="spb + userinfo">
          <img className="useravatar" src={profile} alt="" />
          <span>
            <Button setupbtn="setup-btn" name={"set up profile"} />
          </span>
        </div>
        <div className="userinfo">
          <p className="userid">Jenifer Asnath</p>
          <p>@userName</p>
        </div>
        <div className="userinfo">
          <img src={calendar} alt="" />
          <span> Joined April 2020</span>
        </div>
        <div className="userinfo">
          <Link className="lien">
            <span className="userid">0 </span>Following 
          </Link>
          <Link className="lien">
            <span className="userid">0 </span>Followers
          </Link>
        </div>
      </div>
      <div className="nav">
        {menu.map(({ name, path }) => (
          <Link className="onglets" key={name} path={path}>
            <span className="onglet">{name}</span>
          </Link>
        ))}
      </div>
{/* 
        <Routes>
          <Route path="/" Component={Posts}/>
        </Routes> */}
      
    </div>
  
  );
}
