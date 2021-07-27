import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NumberRating extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          id="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

NumberRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
