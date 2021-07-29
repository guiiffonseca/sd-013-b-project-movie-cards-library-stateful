import React from 'react';

export default class RatingInput extends React.Component {
  render() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
        />
      </label>
    );
  }
}
