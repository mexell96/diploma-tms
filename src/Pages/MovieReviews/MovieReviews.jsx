import React, { useEffect, useState } from "react";
import { getShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import { Pagination } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/background.jpg";


const useStyles = makeStyles({
  movieCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 0px 0px 75px",
    backgroundImage: `url(${background})`,
  },
  pagin: {
    display: "flex",
    justifyContent: "center",
    background: "#bec1c8",
  },
}); 


function MovieReviews() {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(10);
  const shows = useSelector(state => state.show.shows)

  const showsPerPage = 8;

  useEffect(() => {
    dispatch(getShows(1));
    if (shows) {
      setCount(Math.ceil(shows.length / showsPerPage))

    }
  }, [dispatch, shows])

  const handleChange = (event, page) => {
    setFrom((page - 1) * showsPerPage);
  }

  const classes = useStyles();


  return <div className={classes.movieCenter}>Movie Reviews
    <ShowsGallery isReviewsPage showsPerPage={showsPerPage} from={from} cardSize={"lg"}/>
    <Pagination className={classes.pagin} count={count} variant="outlined" onChange={handleChange} shape="rounded" />
  </div>;
}

export default MovieReviews;