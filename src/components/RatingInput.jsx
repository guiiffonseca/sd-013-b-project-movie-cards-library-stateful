import React from 'react';
import PropTypes from 'prop-types';

export default class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
