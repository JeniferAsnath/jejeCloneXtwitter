import React from "react";
import menu from "../assets/menu.js";
import Button from "./Button";
import iconetwitter from "../assets/Icons/Twitter.svg";
import book from "../image/book.png";
import more from "../assets/Icons/More.svg";
import blocked from "../assets/Icons/Private.svg";
export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <img className="logotwitter" src={iconetwitter} alt="" />
      {menu.map((item) => (
        <div className="menu">
          <img src={item.Icon} alt="" />
          <span className="text-xl">{item.name}</span>
        </div>
      ))}
      <Button btnlarge="btn-large" name={"Tweet"}></Button>
      <div className="users">
        <img className="profile" src={book} />
        <div className="username">
          <span>Bradley cortiz </span>
          <img src={blocked} />
          
        </div>
        <span><img src={more} /></span>
      </div>
    </div>
  );
}
