import React from "react";
import { Route, Switch } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import background from "./images/background.jpg";

import { Home, About, JoinUs, Contacts, MovieReviews, Show, Favourite } from "./Pages";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";



import { useAuth0 } from '@auth0/auth0-react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope, faGlobe, faMapMarkerAlt, faMobileAlt, } from '@fortawesome/free-solid-svg-icons'
import { far, faUser } from '@fortawesome/free-regular-svg-icons'

library.add(fab, far, faCheckSquare, faCoffee, faUser, faEnvelope, faGlobe, faMapMarkerAlt, faMobileAlt, )

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${background})`,
    height: "100vh",
  },
});

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/movie-reviews", name: "Movie Reviews", component: MovieReviews },
  { path: "/join-us", name: "Join Us", component: JoinUs },
  { path: "/contacts", name: "Contacts", component: Contacts },
  { path: "/favourite", name: "Favourite", component: Favourite },
];

function App() {
  const classes = useStyles();
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
      <div className={classes.root}>
        <Header routes={routes}></Header>
        <Paper>
          <Switch>
            {routes.map((elem) => (
              <Route
                path={elem.path}
                exact
                component={elem.component}
                key={elem.name}
              />
            ))}
            <Route path={"/show/:id"} exact component={Show}></Route>

            <Route> 404 not found </Route>
          </Switch>
        </Paper>
        <Footer></Footer>
      </div>
  );
}

export default App;
