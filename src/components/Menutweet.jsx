import React from "react";

export default function Menutweet({Icons, text}) {
  return (
    
    <div className="Menutweet">
      <img src={Icons} alt="" />
      <h4>{text}</h4>
    </div>
    
  );
}
