import React from "react";

export default function ContenairTweet(props) {
  return (
    <div className="contenairFlex">
      <h4>{props.title}</h4>
      <div >{props.children}</div>
    </div>
  );
}
