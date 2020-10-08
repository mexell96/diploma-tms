import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  log: {
    padding: "5px 5px",
    display: "inline-block",
    fontSize: "0.9333333333em",
    fontWeight: 500,
    lineHeight: 1,
    border: "1px solid black",
    borderRadius: "5px",
    textDecoration: "none",
    background: "white",
    color: "black",
    margin: 0,
  },
  imgStyle: {
    width: "50px",
    borderRadius: "50%",
    border: "3px solid #ffaa3c",
  }

  
});


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const classes = useStyles();

  return (
    isAuthenticated && (
      <div style={{display: "flex"}}>
        <img className={classes.imgStyle} src={user.picture} alt={user.name} />
        <div>
          <p className={classes.log}>{user.name}</p>
          <p className={classes.log}>{user.email}</p>
        </div>
        {/* <JSONPretty data={user} />
        {JSON.stringify(user, null, 2)} */}
      </div>
    )
  );
};

export default Profile;


