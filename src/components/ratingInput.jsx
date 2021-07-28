import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="number"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          id="number"
          value={ value }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingInput;
