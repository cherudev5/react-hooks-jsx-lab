import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About me</h2>
    <p>Meet a passionate programmer who thrives on the excitement 
      of tackling new challenges. With a deep love for programming,
      this individual finds joy in unraveling complex problems and 
      crafting elegant solutions. Always eager to explore the 
      ever-evolving landscape of technology, they embrace the prospect 
      of facing novel challenges, viewing each one as an opportunity 
      for growth and innovation. Their enthusiasm for coding is not
       just a skill; it's a dynamic journey fueled by curiosity and 
       a relentless pursuit of mastery in the ever-expanding 
       world of programming.</p>
       <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
