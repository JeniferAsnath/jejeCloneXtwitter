import React from 'react'
import Widget from "../components/Trendscontenair";
import Titres from "../components/Titres";
import Button from "../components/Button";

export default function Posts() {
  return (
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
  )
}
