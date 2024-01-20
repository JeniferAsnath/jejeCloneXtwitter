import React from "react";
import Button from "./Button";
import TweetActions from "./TweetActions";
import Media from "../assets/Icons/Media.svg";
import Gif from "../assets/Icons/Gif.svg";
import Poll from "../assets/Icons/Poll.svg";
import Emoji from "../assets/Icons/Emoji.svg";
import Schedule from "../assets/Icons/Schedule.svg";

export default function TweetEditor({ Phprofile }) {
  return (
    <div className="edit">
      <div className="Tweeteditor">
      <img className="profile" src={Phprofile} alt="" />
      <textarea className="editor" name="" id=""cols="45"rows="3"placeholder=" What's happening?">
      </textarea></div>
      <div className="tweet-editor-action">
        <span className="tweet-actions">
          <TweetActions Icons={Media} />
          <TweetActions Icons={Gif} />
          <TweetActions Icons={Poll} />
          <TweetActions Icons={Emoji} />
          <TweetActions Icons={Schedule} />
        </span>
        <Button btn="btn" name={"Tweet"}></Button>
      </div>
    </div>
  );
}
