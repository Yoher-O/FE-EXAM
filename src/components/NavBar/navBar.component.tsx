import * as React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core/";
import "./NavBar.css";
import EpisodiesList from "../EpisodiesList/episodiesList.component";

const Navbar = () => {
  return (
    <Router>
      <AppBar style={{ background: "#70605f" }} position="static">
        <Toolbar>
          <Link className="link" color="inherit" to="/home">
            HOME
          </Link>
          <Link className="link" color="inherit" to="episodie">
            EPISODES
          </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/home">
          <h1>Home</h1>
        </Route>
        <Route path="/episodie">
          <EpisodiesList />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
