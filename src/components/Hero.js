import React from "react";
import "./Hero.css";
import WixLogo from "../images/Wix-logo.png";
import Top10Logo from "../images/top10-logo.png";

function Hero() {
  return (
    <div class="hero">
      <div className="hero__top">
        <div className="left">
          <img className="hero_leftWix" src={WixLogo} alt="WixLogo" />
          <p>Recommended by:</p>
          <img className="hero_leftTop10" src={Top10Logo} alt="Top10Logo" />
        </div>
        <div className="right">
          <div className="hero__rightBtn">Start Now</div>
        </div>
      </div>
      <div className="hero__mid">
        <div className="hero__midContent">
          <h1>The Leader in Website Creation</h1>
          <div className="hero__midBtn">Start Now</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
