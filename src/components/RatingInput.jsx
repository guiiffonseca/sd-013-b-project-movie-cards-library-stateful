import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            name="rating"
            data-testid="rating-input"
            type="number"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingInput;
