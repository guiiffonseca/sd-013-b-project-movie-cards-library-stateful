import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormRating extends Component {
  render() {
    const { rating, callback } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ callback }
        />
      </label>
    );
  }
}

FormRating.propTypes = {
  rating: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
