import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/background.jpg";
import { withAuthenticationRequired } from '@auth0/auth0-react';


const useStyles = makeStyles({
  movieCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "84px 0px 0px 75px",
    backgroundImage: `url(${background})`,
  },
  pagin: {
    display: "flex",
    justifyContent: "center",
    background: "#bec1c8",
  },
  colorTilte: {
    padding: "5px 5px 5px 5px",
    background: "#ffaa3c",
    width: 250,
  },
});

function Favourite() {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const { shows, searchedShows } = useSelector((state) => state.show);

  const showsPerPage = 8;
  const newShows = [];

  useEffect(() => {
    dispatch(getShows(1));
  }, [dispatch]);
  
  useEffect(() => {
    if (localStorage) {
      setCount(Math.ceil(localStorage.length / showsPerPage));
      setPage(1)
      setFrom(0);
    }
  }, [dispatch, localStorage]); // количество страниц


  useEffect(() => {
    if(shows && localStorage) {  
      for(let i=0; i < localStorage.length; i++) {
        var key = +localStorage.key(i);

        for (let b = 0; b < shows.length; b++) {
          if(key === shows[b].id) {
            newShows.push(shows[b])
          }
        }
      }
      console.log({newShows}); // избранные шоу
      dispatch(setSearchedShows(newShows));
    } else {
      dispatch(setSearchedShows(shows));
    }
  }, [dispatch, localStorage, shows]);


  const handleChange = (event, page) => {
    setFrom((page - 1) * showsPerPage);
    setPage(page);
  };

  const classes = useStyles();

  function changeLS () {
    if(localStorage.length < searchedShows.length) {
      for(let i=0; i < localStorage.length; i++) {
        var key = +localStorage.key(i);

        for (let b = 0; b < shows.length; b++) {
          if(key === shows[b].id) {
            newShows.push(shows[b])
          }
        }
      }
      dispatch(setSearchedShows(newShows));
    }

    if (localStorage.length <= 8) {
      setCount(Math.ceil(localStorage.length / showsPerPage));
      setPage(1)
      setFrom(0);
    }
  } 

  return (
    <div className={classes.movieCenter}>
      <div onClick={changeLS} style={{display: "flex", width: 1828, }}>
        <ShowsGallery shows={searchedShows} isReviewsPage showsPerPage={showsPerPage} from={from} cardSize={"lg"} />
      </div>
      <Pagination
        page={page}
        color="secondary"
        className={classes.pagin}
        count={count}
        variant="outlined"
        onChange={handleChange}
        shape="rounded"
      />
    </div>
  );
}

export default withAuthenticationRequired(Favourite, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>
});