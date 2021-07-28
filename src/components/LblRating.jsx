import React from 'react';
import PropTypes from 'prop-types';

export default class LblRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          name="rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

LblRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
