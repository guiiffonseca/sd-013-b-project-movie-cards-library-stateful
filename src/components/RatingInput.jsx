import React from 'react';
import PropTypes from 'prop-types';

export default class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
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
  genre: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
