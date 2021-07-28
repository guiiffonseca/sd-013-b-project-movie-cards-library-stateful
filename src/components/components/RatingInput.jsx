import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          id="rating"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default RatingInput;
