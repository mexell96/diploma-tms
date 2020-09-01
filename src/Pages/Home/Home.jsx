import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getShows } from "../../actions/shows";
import ShowsGallery from "./components/ShowsGallery"

function Home(props) {
  useEffect(() => {
    props.getShows(1);
  }, [props]);

  return <div>Home <ShowsGallery /></div>;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getShows: (page) => dispatch(getShows(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
