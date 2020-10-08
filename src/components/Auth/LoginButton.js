import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()} style={{
        padding: "5px 5px",
        fontSize: "0.9333333333em",
        fontWeight: 500,
        lineHeight: 1,
        border: "1px solid black",
        borderRadius: "5px",
        textDecoration: "none",
        background: "#ffaa3c",
        color: "black",
        margin: "0px 0px 0px 56px"}}>Log In</button>
    )
  );
};

export default LoginButton;
