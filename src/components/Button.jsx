import React from "react";

export default function Buttons(props) {
  return (
    <>
      <button className={`${props.btn} ${props.btnlarge} + ${props.btntips} + ${props.pdBtn} + ${props.setupbtn}`}>{props.name}</button>
      {props.children}
    </>
  );
}
