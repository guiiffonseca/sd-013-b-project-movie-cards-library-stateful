import React from 'react';

class InputRating extends React.Component {
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

export default InputRating;
