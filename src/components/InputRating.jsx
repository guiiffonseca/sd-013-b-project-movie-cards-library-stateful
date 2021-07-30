import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label htmlFor="rating-input-lab" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input-lab"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
