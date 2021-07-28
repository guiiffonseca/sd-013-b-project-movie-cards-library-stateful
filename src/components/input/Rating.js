import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ value }
          onChange={ onChange }
          name="rating"
          id="rating"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
