import React from 'react';

class AddRating extends React.Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default AddRating;
