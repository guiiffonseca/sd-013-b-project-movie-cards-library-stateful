import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  render() {
    return (
      <h1>Add Movie</h1>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
