import React from "react";
import { Typography } from "@material-ui/core";

function MoviePremiere(props) {
  const { premiereMonth, description, movies } = props;
  return (
    <article>
      <Typography variant="h2" component="h2">
        {premiereMonth} premiere
      </Typography>
      <Typography component="p">{description}</Typography>
      {movies.map((movie) => (
        <div>
          <p>{movie.date}</p> <p>{movie.description}</p>
        </div>
      ))}
    </article>
  );
}

export default MoviePremiere;
