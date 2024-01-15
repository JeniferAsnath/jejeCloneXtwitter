import React from "react";

export default function BlocIcons(props) {
const { Icons, number } = props
  return (
    <span className={`tweet ${props.tweetactions}`} >
      <img src={Icons} alt="" />
      <span className="">{number}</span>
      {props.children}
    </span>
  );
}
