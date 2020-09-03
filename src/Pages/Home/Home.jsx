import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getShows } from "../../actions/shows";
import ShowsGallery from "./components/ShowsGallery";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { arrayFromNumber } from "./utils/index";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const pages = 12;

function Home(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getShows(1);
  }, [props]);

  const handlePageChange = (page) => (e) => {
    props.getShows(page);
  };

  return (
    <div className={classes.root}>
      <ShowsGallery />
      <div>
        {arrayFromNumber(pages)
          .map((page) => page + 1)
          .map((number) => (
            <Button onClick={handlePageChange(number)}>{number}</Button>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getShows: (page) => dispatch(getShows(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
