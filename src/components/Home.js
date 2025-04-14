import React from "react";
import { name, city } from "../data/data.js";

const divstyle = {
  color: "firebrick",
} 
function Home() {
  // update the JSX being returned!

  return <div style={divstyle} id="home">Home
        <h1 style={divstyle}> {name} is a Web Developer from {city}</h1>
        </div>;
}

export default Home;
