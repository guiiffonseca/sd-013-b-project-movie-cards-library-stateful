import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { state, callback } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label" className="label">
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
  state: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  callback: PropTypes.func.isRequired,
};

InputRating.defaultProps = {
  state: 'undefined',
};

export default InputRating;
