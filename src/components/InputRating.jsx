import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label htmlFor="rating-input-movie" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          id="rating-input-movie"
          type="number"
          value={ rating }
          onChange={ onChange }
          data-testid="rating-input"
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
