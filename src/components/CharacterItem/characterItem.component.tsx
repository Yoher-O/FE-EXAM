import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Button,
  CardActionArea,
  CardMedia
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 350,
    "-webkit-box-shadow": "10px 10px 44px -8px rgba(0,0,0,0.75)",
    "-moz-box-shadow": "10px 10px 44px -8px rgba(0,0,0,0.75)",
    "box-shadow": "10px 10px 44px -8px rgba(0,0,0,0.75)",
    display: "flex",
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
  },
  media: {
    height: 240
  }
});

const CharacterItem = ({ ...props }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className={classes.textAlign}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.name}
          </Typography>
          <Typography
            className={classes.textAlign}
            variant="body2"
            component="p"
          >
            {props.ocupation ? props.ocupation.map((item: any) => item) : ""}
          </Typography>

          <Typography
            className={classes.textAlign}
            variant="body2"
            component="p"
          >
            {props.birthday}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CharacterItem.propTypes = {
  episodie: PropTypes.object
};

export default CharacterItem;
