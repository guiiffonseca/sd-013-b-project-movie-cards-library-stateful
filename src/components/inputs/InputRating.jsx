import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class InputRating extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          value={ value }
          name="rating"
          onChange={ onChange }
          type="number"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
};
