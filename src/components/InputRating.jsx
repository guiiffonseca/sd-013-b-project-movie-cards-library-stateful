import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { state, callback } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ state }
          onChange={ callback }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  state: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default InputRating;
