import React from 'react';

class Rating extends React.Component {

  render() {
    const { rating } = this.props;
    return (
      <label htmlFor="rating"
        data-testid="rating-input-label">
        Avaliação
        <input
          type="text"
          data-testid="rating-input"
          value={rating}
        />
      </label>
    )
  }
}

export default Rating;