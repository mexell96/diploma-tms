import React from "react";
import OurTeam from "./components/OurTeam";
import background from "../../images/background.jpg";

function About() {
  return <div style={{backgroundImage: `url(${background})`,}}>About <OurTeam /></div>;
}

export default About;
