import React from "react";
import Titres from "./Titres";
import TweetEditor from "./TweetEditor";
import Stars from "../assets/Icons/Timeline-Prop.svg";
import Profil from "../image/book.png";
import Tweet from "./Tweet";

export default function Timeline() {
  return (
    <div className="timeline">
      <Titres title='title' Name={"Home"} Icon={Stars} />
      <TweetEditor Phprofile={Profil}></TweetEditor>
      <Tweet />
    </div>
  );
}
