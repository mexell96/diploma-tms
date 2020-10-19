import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getShow} from "../../actions/shows.js";
import ShowCard from '../../components/ShowCard';
import background from "../../images/background.jpg";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backgr: {
    backgroundImage: `url(${background})`,
  },
  mainBG : {
    display: "flex",
    width: 1110,
    margin: "0 auto",
    background: "white",
    padding: 30,
  }
}));

function Show(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getShow(props.match.params.id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id])

  console.log(props)
  return (
    <div className={classes.backgr}>
      <div className={classes.mainBG}>
      {props.show && 
        <ShowCard src={props.show.image ? props.show.image.medium : "" } 
        id={props.show.id} 
        title={props.show.name}
        description={props.show.summary}
        >
        </ShowCard>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  show: state.show.currentShow
})

const mapDispatchToProps = dispatch => ({
  getShow: (id) => dispatch(getShow(id))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
