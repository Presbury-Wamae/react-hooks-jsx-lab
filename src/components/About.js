import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    About
    <h2>About Me</h2>
    <p>Hi! I'm a passionate web developer currently learning full-stack development through an intensive bootcamp. 
      I love building interactive, user-friendly applications and am especially excited about JavaScript and React. 
      When I’m not coding, you’ll probably find me watching football or exploring new tech tools!</p>
    <img src={image} alt="I made this"/>
    </div>;
}

export default About;
