import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="input-number" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default InputNumber;
