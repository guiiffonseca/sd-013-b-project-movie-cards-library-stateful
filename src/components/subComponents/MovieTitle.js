import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieTitle extends Component {
  render() {
    const { title, callBack } = this.props;
    return (
      <label htmlFor="movieName" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="movieName"
          value={ title }
          data-testid="title-input"
          onChange={ callBack }
        />
      </label>
    );
  }
}

export default MovieTitle;

MovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
