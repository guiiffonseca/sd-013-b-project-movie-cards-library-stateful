import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          id="rating"
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number,
  onChange: PropTypes.func,
}.isRequired;

export default RatingInput;
