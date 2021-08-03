import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingForm extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

RatingForm.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
