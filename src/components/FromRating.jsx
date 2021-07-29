import React from 'react';

class FromRating extends React.Component {

  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          valor={ valor }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

export default FromRating;
