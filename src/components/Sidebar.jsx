import React from "react";
import {  Link } from "react-router-dom";
// import Home from "../components/pages/Home.jsx";
import menu from "../assets/menu.js";
import Button from "./Button";
import iconetwitter from "../assets/Icons/Twitter.svg";
import book from "../image/book.png";
import more from "../assets/Icons/More-2.svg";
import blocked from "../assets/Icons/Private.svg";
export default function Sidebar(props) {
  return (
  
      <div className="sidebar">
        <img className="logotwitter" src={iconetwitter} alt="" />
        {menu.map(({ name, Icon, path }) => (
          <Link className="liens" key={"name, Icon"} to={path}>
            <span className="menu">
              <img src={Icon} alt="" />
              {name}
            </span>
          </Link>

        ))}
        <Button btnlarge="btn-large" name={"Tweet"}></Button>
        <div className="users">
          <img className="profile" src={book} />
          <div className="username">
            <span>Bradley cortiz </span>
            <img src={blocked} />
          </div>
          <span>
            <img src={more} />
          </span>
        </div>
      </div>
        

  );
}
