import React from "react";

export default function Buttons(props) {
  return (
    <>
      <button className={`btn ${props.fff}`}>{props.name}</button>
    </>
  );
}
