import React from "react";
import Form from "../../components/Form"

import background from "../../images/background.jpg";

function Contacts() {
  return <div style={{backgroundImage: `url(${background})`,}}>Contacts <Form count={"email"} /></div>;
}

export default Contacts;
