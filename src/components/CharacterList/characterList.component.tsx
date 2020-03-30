import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles, Grid, ButtonGroup, Button } from "@material-ui/core/";
import CharacterItem from "../CharacterItem/characterItem.component";

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

const CharacterList = ({ ...props }) => {
  const classes = useStyles();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    props.fetchCharacters();
  }, []);

  useEffect(() => {
    setCharacters(props.characters);
  }, [props.characters]);

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
              <Button>Name</Button>
              <Button>Birthday</Button>
              <Button>Portrayer </Button>
            </ButtonGroup>
          </div>
        </Grid>
        {characters
          ? characters.map((item: any, index) => (
              <Grid item xs={12} sm={4} lg={3} key={index}>
                <CharacterItem
                  img={item.img}
                  name={item.name}
                  ocupation={item.occupation}
                  birthday={item.birthday}
                />
              </Grid>
            ))
          : ""}
      </Grid>
    </div>
  );
};

CharacterList.propTypes = {
  fetchCharacters: PropTypes.func,
  characters: PropTypes.array
};

const mapState = (state: any) => {
  return {
    characters: state.characters.characters
  };
};

const mapDispatch = (dispatch: any) => ({
  fetchCharacters: dispatch.characters.fetchCharacter
});

export default connect(mapState, mapDispatch)(CharacterList);
