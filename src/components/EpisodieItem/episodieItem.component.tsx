import React from "react";
import PropTypes from "prop-types";

const EpisodieItem = ({ ...props }) => {
  return (
    <div>
      <label>{props.title}</label>
    </div>
  );
};

EpisodieItem.propTypes = {
  episodie: PropTypes.object
};

export default EpisodieItem;
