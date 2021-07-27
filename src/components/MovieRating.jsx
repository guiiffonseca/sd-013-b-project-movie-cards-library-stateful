import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieRating;
