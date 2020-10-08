import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { 
    logout, 
    isAuthenticated 
  } = useAuth0();

  return isAuthenticated && (
    <button onClick={() => {
      logout({ returnTo: window.location.origin });
    }} style={{
    padding: "5px 5px",
    fontSize: "0.9333333333em",
    fontWeight: 500,
    lineHeight: 1,
    border: "1px solid black",
    borderRadius: "5px",
    textDecoration: "none",
    background: "#ffaa3c",
    color: "black",
    margin: "0px 0px 0px 56px"}}>Log out</button>
  );
};

export default LogoutButton;
