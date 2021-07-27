import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddRating extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ value }
          data-testid="rating-input"
          id="input-rating"
          onChange={ handleChange }
          name="rating"
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
