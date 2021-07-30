import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            value={ value }
            onChange={ onChange }
            data-testid="rating-input"
            name="rating"
          />
        </label>
      </div>
    );
  }
}

export default InputRating;

InputRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
