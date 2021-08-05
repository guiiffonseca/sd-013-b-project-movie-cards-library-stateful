import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingFeedback extends Component {
  render() {
    const { ratingValue, handleChange } = this.props;
    return (
      <label htmlFor="true" data-testid="rating-input-label">
        Avaliação:
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          onChange={ handleChange }
          min={ 0 }
          value={ ratingValue }
        />
      </label>
    );
  }
}

RatingFeedback.propTypes = {
  ratingValue: PropTypes.string,
  handleChange: PropTypes.func,
};

RatingFeedback.defaultProps = {
  handleChange: undefined,
  ratingValue: 0,
};
