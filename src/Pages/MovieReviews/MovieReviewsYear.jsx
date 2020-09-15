import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import { Pagination } from '@material-ui/lab';
import { Select, MenuItem } from '@material-ui/core'

import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/background.jpg";

const ALL_YEARS = 'All'
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
    padding: "5px 5px 5px 5px",
    background: "#ffaa3c",
    width: 250,
  },
}); 


function MovieReviewsYear() {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(10);
  const [premiered, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(ALL_YEARS)

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES)

  const { shows, searchedShows } = useSelector(state => state.show)

  const showsPerPage = 8;

  useEffect(() => { dispatch(getShows(1)); }, [dispatch])

  useEffect(() => {
    if (shows) {
      const oldYearSet = shows.flatMap(show => show.premiered);
      var newArrDate = [];
      for (let index = 0; index < oldYearSet.length; index++) {
        if (oldYearSet[index] == null) {

        } else {
          let date = oldYearSet[index];
          var newData = date.substring(0, 4);
        }
        newArrDate.push(newData);
      }
      const yearsSet = new Set(newArrDate);
      setYears([...yearsSet.values()])
      setCount(Math.ceil(shows.length / showsPerPage))
    }
  }, [dispatch, shows])

  useEffect(() => {
    if (shows) {
      const genresSet = new Set(shows.flatMap(show => show.genres));
      setGenres([...genresSet.values()])
      setCount(Math.ceil(shows.length / showsPerPage))
    }

  }, [dispatch, shows])



  useEffect(() => {
    if (shows) {
      if (selectedYear !== ALL_YEARS) {
        
        const includShows = show => {
          if (show.premiered) {
            var newShowDate = show.premiered.substring(0, 4);
            return newShowDate.includes(selectedYear, "подходящие даты"); // вернули подходяие
          }
        }
        const filteredShows = shows.filter(includShows);  
        dispatch(setSearchedShows(filteredShows))
      } else {
        dispatch(setSearchedShows(shows))
      }
    }
  }, [dispatch, premiered, selectedYear, shows])

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
    setSelectedYear(event.target.value)
  }

  const handleSelectChangeGenre = (event) => {
    setSelectedGenre(event.target.value)
  }

  const classes = useStyles();


  return <div className={classes.movieCenter}>
  
    <Select value={selectedYear} onChange={handleSelectChange} className={classes.colorTilte}>
      <MenuItem value="All" >All years
      </MenuItem>
      {premiered.map(year => <MenuItem key={year} value={year}>{year}</MenuItem>)}
    </Select>

    <Select value={selectedGenre} onChange={handleSelectChangeGenre} className={classes.colorTilte}>
      <MenuItem value="All" >All genres
      </MenuItem>
      {genres.map(genre => <MenuItem key={genre} value={genre}>{genre}</MenuItem>)}
    </Select>

    <ShowsGallery shows={searchedShows} isReviewsPage showsPerPage={showsPerPage} from={from}  cardSize={"lg"} />
    <Pagination className={classes.pagin} count={count} variant="outlined" onChange={handleChange} shape="rounded" />
  </div>;
}

export default MovieReviewsYear;

