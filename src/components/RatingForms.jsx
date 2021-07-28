import React from 'react';
import PropTypes from 'prop-types';

export default class RatingForms extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating"
      >
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          id="rating"
          min="0"
          max="5"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingForms.default = {
  rating: 0,
};

RatingForms.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
