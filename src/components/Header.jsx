import React from "react";
import PropTypes from "prop-types";
import { Grid, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0 366.5px",
  },
  nav: {
    flexDirection: "row",
    background: "yellow",
    padding: "50px 0px",
    color: "#84878d",
    fontFamily: "Roboto, Open Sans, sansSerif",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "normal",
  },
  navLogo: {
    background: "brown",
    padding: "20px 0px",
    textTransform: "uppercase",
    color: "white",
    fontSize: "1.0666666667em",
    display: "flex",
    height: 77,
    maxWidth: 270,
    flexBasis: 270,
    justifyContent: "center",
    alignItems: "center",
  },
  navLink: {
    padding: "10px 15px",
    display: "inline-block",
    fontSize: "0.9333333333em",
    fontWeight: 400,
    lineHeight: 1,
    border: "1px solid black",
    borderRadius: "5px",
    textDecoration: "none",
    background: "white",
  },
  navName: {
    margin: "0px 20px",
  }
});

function Header(props) {
  const { routes } = props;
  const classes = useStyles();

  return (
    <Grid container justify="space-between" className={classes.navContainer}>
      <Grid item xs={2} className={classes.navLogo}>
        <img src={require("../images/pic/logo.png")} alt="logo" />
        <div className={classes.navName}>
          <div>Company Name</div>
          <div>Tagline goes here</div>
        </div>
      </Grid>
      <Grid item xs={6} className={classes.resetPadding}>
        <AppBar position="static" className={classes.nav}>
          {routes.map((elem) => (
            <Link to={elem.path} key={elem.name} className={classes.navLink}>
              {elem.name}
            </Link>
          ))}
        </AppBar>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      component: PropTypes.func,
    })
  ),
};

export default Header;
