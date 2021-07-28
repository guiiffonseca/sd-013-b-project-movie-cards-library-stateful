import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { value, callBack } = this.props;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          id="rating"
          value={ value }
          onChange={ callBack }
        />

      </label>
    );
  }
}

export default MovieRating;

MovieRating.propTypes = {
  value: PropTypes.number.isRequired,
  callBack: PropTypes.func.isRequired,
};
