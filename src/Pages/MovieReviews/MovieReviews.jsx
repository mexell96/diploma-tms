import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import { Pagination } from "@material-ui/lab";
import { Select, MenuItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/background.jpg";

const ALL_YEARS = "All";
const ALL_GENRES = "All";
var _ = require("lodash");

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

function MovieReviews() {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(10);
  const [premiered, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(ALL_YEARS);
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES);
  const [genres, setGenres] = useState([]);
  const { shows, searchedShows } = useSelector((state) => state.show);

  const showsPerPage = 8;

  useEffect(() => {
    dispatch(getShows(1));
  }, [dispatch]);

  useEffect(() => {
    if (shows) {
      const oldYearSet = shows.flatMap((show) => show.premiered);
      var newArrDate = [];
      for (let index = 0; index < oldYearSet.length; index++) {
        if (oldYearSet[index]) {
          let date = oldYearSet[index];
          var newData = date.substring(0, 4);
        }
        newArrDate.push(newData);
      }
      const yearsSetSort = new Set(
        newArrDate.sort(function (a, b) {
          return b - a;
        })
      );
      setYears([...yearsSetSort.values()]);
    }
  }, [dispatch, shows]); // делает список годов

  useEffect(() => {
    if (shows) {
      const genresSet = shows.flatMap((show) => show.genres);
      const genresSetSort = new Set(genresSet.sort());
      setGenres([...genresSetSort.values()]);
    }
  }, [dispatch, shows]); // делает список жанров

  useEffect(() => {
    if (shows) {
      var newShows = searchedShows === null ? shows : searchedShows;
      setCount(Math.ceil(newShows.length / showsPerPage));
    }
  }, [dispatch, shows, searchedShows]); // количество страниц

  useEffect(() => {
    if (shows) {
      if (selectedYear !== ALL_YEARS || selectedGenre !== ALL_GENRES) {
        let filteredShows;
        let newShows;

        if (selectedYear !== ALL_YEARS && selectedGenre === ALL_GENRES) {
          newShows = shows;
          const filteredShowsYear = newShows.filter((show) => {
            if (show.premiered) {
              const newShowDate = show.premiered.substring(0, 4);
              return newShowDate.includes(selectedYear);
            }
          });
          filteredShows = filteredShowsYear;
        }

        if (selectedYear === ALL_YEARS && selectedGenre !== ALL_GENRES) {
          newShows = shows;
          const filteredShowsGenre = newShows.filter((show) => {
            return show.genres.includes(selectedGenre);
          });
          filteredShows = filteredShowsGenre;
        }

        if (selectedYear !== ALL_YEARS && selectedGenre !== ALL_GENRES) {
          newShows = searchedShows.length < shows.length && searchedShows.length !== 0 ? searchedShows : shows;
          const filteredShowsYear = newShows.filter((show) => {
            if (show.premiered) {
              const newShowDate = show.premiered.substring(0, 4);
              return newShowDate.includes(selectedYear);
            }
          });
          const filteredShowsGenre = newShows.filter((show) => {
            return show.genres.includes(selectedGenre);
          });
          filteredShows = _.intersection(filteredShowsYear, filteredShowsGenre);
        }

        console.log(filteredShows, "Отфильтрованные шоу");
        dispatch(setSearchedShows(filteredShows));
      } else {
        dispatch(setSearchedShows(shows));
      }
    }
  }, [dispatch, premiered, selectedYear, selectedGenre, shows]);

  const handleChange = (event, page) => {
    setFrom((page - 1) * showsPerPage);
  };

  const handleSelectChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSelectChangeGenre = (event) => {
    setSelectedGenre(event.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.movieCenter}>
      <Select value={selectedYear} onChange={handleSelectChange} className={classes.colorTilte} >
        <MenuItem value="All">1. Choose year</MenuItem>
        {premiered.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>

      <Select value={selectedGenre} onChange={handleSelectChangeGenre} className={classes.colorTilte} >
        <MenuItem value="All">2.Choose genre</MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>

      <ShowsGallery shows={searchedShows} isReviewsPage showsPerPage={showsPerPage} from={from} cardSize={"lg"} />
      <Pagination
        className={classes.pagin}
        count={count}
        variant="outlined"
        onChange={handleChange}
        shape="rounded"
      />
    </div>
  );
}

export default MovieReviews;
