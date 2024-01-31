import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 font-color firebrick>{name} is a webdeveloper from {city}</h1>
  </div>;
}

export default Home;
