import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { onChange, rating } = this.props;
    return (
      <label htmlFor="Input rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          id="Input rating"
          name="rating"
          onChange={ onChange }
          type="number"
          value={ rating }
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
