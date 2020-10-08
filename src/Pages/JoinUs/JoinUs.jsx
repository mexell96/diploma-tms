import React from "react";
import AboutUs from "./components/AboutUs";
import background from "../../images/background.jpg";

function JoinUs() {
  return <div style={{backgroundImage: `url(${background})`,}}>Join Us <AboutUs /></div>;
}

export default JoinUs;
