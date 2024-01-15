import React from "react";

export default function Buttons(props) {
  return (
    <>
      <button className={`btn ${props.btnlarge} + ${props.btntips}`}>{props.name}</button>
      {props.children}
    </>
  );
}
