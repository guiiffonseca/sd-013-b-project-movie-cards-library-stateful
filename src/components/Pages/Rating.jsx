import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          id="rating"
          onChange={ onChange }
          type="number"
          data-testid="rating-input"
          value={ value }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
