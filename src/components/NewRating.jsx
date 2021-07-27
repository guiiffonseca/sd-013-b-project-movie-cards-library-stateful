import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
