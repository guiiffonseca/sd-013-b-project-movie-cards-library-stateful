import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingInput;
