import React from 'react';

class AddRating extends React.Component {
  render() {
    return (
      <label
        htmlFor="add-movie-rating"
        data-testid="rating-input-label"
      >
        Avaliação:
        <input
          id="add-movie-rating"
          className="search-field"
          data-testid="rating-input"
          type="number"
        />
      </label>
    );
  }
}

export default AddRating;
