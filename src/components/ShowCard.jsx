import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  showCard: ({ size }) => {
    const styles = {
      width: 255,
      height: 295,
      marginBottom: 10,
      overflow: "hidden",
      border: "2px solid yellow",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",  
    };
    if (size === "sm") {
      return styles;
    }
    if (size === "lg") {
      styles.width = 455;
      styles.height = 295;
      return styles;
    }
  },
  image: ({ isReviewsPage }) => ({
    transition: isReviewsPage ? ".5s" : "none",
    display: "block",
    "&:hover": {
      transform: isReviewsPage ? "scale(1.2)" : "none",
    },
  }),
}));

function ShowCard(props) {
  const { size = "sm", src, alt, id, title, description, isReviewsPage } = props;
  const classes = useStyles({ size, isReviewsPage });

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
  isReviewsPage: PropTypes.bool.isRequired
};

export default ShowCard;
