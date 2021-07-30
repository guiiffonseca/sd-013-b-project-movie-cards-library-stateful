import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInputRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

AddMovieInputRating.propTypes = {
  rating: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

AddMovieInputRating.defaultProps = {
  rating: 0,
};

export default AddMovieInputRating;
