import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  showCard: ({ size }) => {
    const stylesSM = {
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",  
    };
    const stylesLG = {
      width: 400,
      height: 800,
      marginBottom: 20,
      background: "#ffffffd9",
      display: "flex",
      flexDirection:"column",
      alignItems: "center",  
    }
    if (size === "sm") {
      return stylesSM;
    }
    if (size === "lg") {
      
      return stylesLG;
    }
  },
  image: ({ isReviewsPage }) => ({
    transition: isReviewsPage ? ".3s ease transform" : "none",
    display: "block",
    "&:hover": {
      transform: isReviewsPage ? "scale(1.2)" : "none",
    },
  }),
  buttonShow: {
    display: "flex", 
    flexDirection: "column",
    justifyContent: "center",
    width: "255px",
    margin: "0 auto",
  },
}));

function ShowCard(props) {
  const { size = "sm", src, alt, id, title, description, isReviewsPage, } = props;
  const classes = useStyles({ size, isReviewsPage });

  const addItem = () => {
    localStorage.setItem(id, title);
    console.log({localStorage})
  };
  const delItem = () => {
    localStorage.removeItem(id);
    console.log({localStorage})
  }
  
  return (
    <div className={classes.showCard}>
      <Link to={`/show/${id}`}>
        <img src={src} alt={alt ? alt : "no-alt"} className={classes.image} style={{width: "255px", margin: "0 auto",}}/>
      </Link>
      <h3 style={{textAlign: "center", color: "#ffaa3c"}}>{title}</h3>
      <div className={classes.buttonShow}>
        <button onClick={addItem}>Add in favourite</button>
        <button onClick={delItem}>Delete in favourite</button>
      </div>
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
