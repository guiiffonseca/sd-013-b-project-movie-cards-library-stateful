import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingFeedback extends Component {
  render() {
    const { feedbackValue, ratingValue, handleChange } = this.props;
    return (
      <label htmlFor="true" data-testid="rating-input-label">
        Avaliação
        <input
          type="text"
          name="feedback"
          value={ feedbackValue }
          onChange={ handleChange }
        />
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          onChange={ handleChange }
          defaultValue="0"
          value={ ratingValue }
        />
      </label>
    );
  }
}

RatingFeedback.propTypes = {
  feedbackValue: PropTypes.string.isRequired,
  ratingValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
