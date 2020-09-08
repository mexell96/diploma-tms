import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    image: {
        transition: ".3s ease transform",
        "&:hover": {
        transform: "scale(1.2)",
        },
    },
}));

function ShowCard(props) {
    const { size = "sm"} = props;
    const { src, alt, id, title, description } = props;
    const classes = useStyles({ size });
  
    return (
      <div className={classes.showCard}>
        <Link to={`/show/${id}`}>
          <img src={src} alt={alt ? alt : "no-alt"} className={classes.image} />
        </Link>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

  ShowCard.propTypes = {
    size: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
  };
  
  export default ShowCard;


  const SHOWS_PER_PAGE = 7;

function ShowsGallery(props) {
  return (
    <Grid container>
      {props.shows
        ? props.shows
            .filter((show, index) => index < SHOWS_PER_PAGE)
            .map((show) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <ShowCard
                  src={show.image ? show.image.medium : ""}
                  id={show.id}
                  key={show.id}
                />
              </Grid>
            ))
        : null}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  shows: state.show.shows,
});

export default connect(mapStateToProps)(ShowsGallery);
