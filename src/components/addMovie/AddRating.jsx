import React from 'react';

class AddRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieRating: 0,
    };

    this.onRatingChange = this.onRatingChange.bind(this);
  }

  onRatingChange(event) {
    this.setState({ movieRating: event.target.value });
  }

  render() {
    const { movieRating } = this.state;
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
          min="0"
          max="5"
          step="0.1"
          value={ movieRating }
          onChange={ this.onRatingChange }
        />
      </label>
    );
  }
}

export default AddRating;
