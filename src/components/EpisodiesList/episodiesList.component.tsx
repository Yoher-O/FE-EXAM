import React, { useEffect } from "react";
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

const EpisodiesList = () => {
  const classes = useStyles();
  const episodies = [
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" },
    { title: "E1", season: "season 1", air_date: "now" }
  ];

  useEffect(() => {
    console.log("xx");
  }, []);

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
        {episodies.map((item, index) => (
          <Grid item xs={3} key={index}>
            <EpisodieItem
              title={item.title}
              season={item.season}
              air_date={item.air_date}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EpisodiesList;
