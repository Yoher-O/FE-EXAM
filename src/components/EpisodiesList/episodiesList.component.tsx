import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles, Grid, ButtonGroup, Button } from "@material-ui/core/";
import EpisodieItem from "../EpisodieItem/episodieItem.component";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  filterSection: {
    display: "flex",
    "flex-direction": "row",
    alignItems: "center",
    padding: 15
  },
  buttonsGroup: {
    marginLeft: 15
  }
}));

const EpisodiesList = ({ ...props }) => {
  const classes = useStyles();
  const [episodies, setEpisodies] = useState([]);

  useEffect(() => {
    props.fetchEpisodies();
  }, []);

  useEffect(() => {
    setEpisodies(props.episodies);
  }, [props.episodies]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.filterSection}>
            <h2>Filter</h2>
            <ButtonGroup
              className={classes.buttonsGroup}
              color="primary"
              aria-label="large outlined primary button group"
            >
              <Button>Season 1</Button>
              <Button>Season 2</Button>
              <Button>Season 3</Button>
              <Button>Season 4</Button>
            </ButtonGroup>
          </div>
        </Grid>
        {episodies
          ? episodies.map((item: any, index) => (
              <Grid item xs={12} sm={4} lg={3} key={index}>
                <EpisodieItem
                  title={item.title}
                  season={item.season}
                  air_date={item.air_date}
                />
              </Grid>
            ))
          : ""}
      </Grid>
    </div>
  );
};

EpisodiesList.propTypes = {
  fetchEpisodies: PropTypes.func,
  episodies: PropTypes.array
};

const mapState = (state: any) => {
  return {
    episodies: state.episodies.episodies
  };
};

const mapDispatch = (dispatch: any) => ({
  fetchEpisodies: dispatch.episodies.fetchEpisodies
});

export default connect(mapState, mapDispatch)(EpisodiesList);
