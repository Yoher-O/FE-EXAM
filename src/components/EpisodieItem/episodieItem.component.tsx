import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    "-webkit-box-shadow": "10px 10px 44px -8px rgba(0,0,0,0.75)",
    "-moz-box-shadow": "10px 10px 44px -8px rgba(0,0,0,0.75)",
    "box-shadow": "10px 10px 44px -8px rgba(0,0,0,0.75)",
    display: "flex",
    height: 200,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  textAlign: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const EpisodieItem = ({ ...props }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.textAlign} variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.textAlign} variant="body2" component="p">
          {props.season}
        </Typography>
        <Typography className={classes.textAlign} variant="body2" component="p">
          {props.episode}
        </Typography>
        <Typography className={classes.textAlign} variant="body2" component="p">
          {props.air_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

EpisodieItem.propTypes = {
  episodie: PropTypes.object
};

export default EpisodieItem;
