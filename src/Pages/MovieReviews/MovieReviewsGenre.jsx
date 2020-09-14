import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import { Pagination } from '@material-ui/lab';
import { Select, MenuItem } from '@material-ui/core'

import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/background.jpg";

const ALL_GENRES = 'All'

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
  colorTilte: {
    padding: "10px 50px 10px 50px",
    background: "#ffaa3c",
  },
}); 


function MovieReviewsGenre() {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(10);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES)
  const { shows, searchedShows } = useSelector(state => state.show)

  const showsPerPage = 8;

  useEffect(() => { dispatch(getShows(1)); }, [dispatch])

  useEffect(() => {
    if (shows) {
      const genresSet = new Set(shows.flatMap(show => show.genres));
      setGenres([...genresSet.values()])
      setCount(Math.ceil(shows.length / showsPerPage))
    }

  }, [dispatch, shows])

  useEffect(() => {
    if (shows) {
      if (selectedGenre !== ALL_GENRES) {
        const filteredShows = shows.filter(show => show.genres.includes(selectedGenre));
        dispatch(setSearchedShows(filteredShows))
      } else {
        dispatch(setSearchedShows(shows))
      }
      
    }
  }, [dispatch, genres, selectedGenre, shows])

  const handleChange = (event, page) => {
    setFrom((page - 1) * showsPerPage);
  }

  const handleSelectChange = (event) => {
    setSelectedGenre(event.target.value)
  }

  const classes = useStyles();


  return <div className={classes.movieCenter}>
  
    <Select value={selectedGenre} onChange={handleSelectChange} className={classes.colorTilte}>
      <MenuItem value="All" >All
      </MenuItem>
      {genres.map(genre => <MenuItem key={genre} value={genre}>{genre}</MenuItem>)}
    </Select>

    <ShowsGallery shows={searchedShows} isReviewsPage showsPerPage={showsPerPage} from={from}  cardSize={"lg"} />
    <Pagination className={classes.pagin} count={count} variant="outlined" onChange={handleChange} shape="rounded" />
  </div>;
}

export default MovieReviewsGenre;