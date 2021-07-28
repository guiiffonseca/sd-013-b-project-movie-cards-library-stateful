import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieTitle extends Component {
  render() {
    const { value, callBack } = this.props;
    return (
      <label htmlFor="movieName" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="movieName"
          value={ value }
          data-testid="title-input"
          onChange={ callBack }
        />
      </label>
    );
  }
}

export default MovieTitle;

MovieTitle.propTypes = {
  value: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
