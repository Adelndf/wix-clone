import React from "react";
import "./AboutBox.css";

function AboutBox({ Icon, title, desc }) {
  return (
    <div className="AboutBox">
      {Icon}
      <div className="aboutBox__txt">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default AboutBox;
