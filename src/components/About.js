import React from "react";
import "./About.css";
import AboutBox from "./AboutBox";
import { aboutData } from "../data/aboutData";

function About() {
  return (
    <div className="wrapper-all">
      <div className="about">
        <div className="about__content">
          <h2>Everything You Need. And More.</h2>
          <div className="about__contentBoxes">
            {aboutData.map((data) => (
              <AboutBox Icon={data.icon} title={data.title} desc={data.desc} />
            ))}
          </div>
          <div className="about__btn">Join now</div>
        </div>
      </div>
    </div>
  );
}

export default About;
